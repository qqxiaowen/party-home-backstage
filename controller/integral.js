const express = require('express')
const router = express.Router()
const integralModel = require('../database/model/integral')
const auth = require('./auth')
const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId

// 获取积分列表
router.get('/',auth,async(req,res,next) => {
    try{
        let {pn=1,size=10} = req.query;
        pn = parseInt(pn)
        size = parseInt(size)
        const data = await integralModel.find({user:req.session.user._id})
                            .limit(size)
                            .skip((pn-1)*size)
                            .sort({_id:-1})
        res.json({
            code:200,
            msg:'获取积分成功',
            data
        }) 
    }catch(err){
        next(err)
    }
})

// 获取总积分
router.get('/all', auth,async(req, res, next)=> {
    try {
        const dataList = await integralModel.aggregate([
            {$match :{user: ObjectId(req.session.user._id)}},
            {$group:  {_id : "$user", count : {$sum : "$mark"}}}
        ])

        // const dataList = await integralModel.aggregate([
        //     {$match :{user: ObjectId(req.session.user._id)}},
        //     {$project:  {
        //         user: 1,
        //         mark: 1,
        //         type: 1,
        //         count: {
        //             $sum: "$mark"
        //         }
        //         }
        //     }
        // ])

        res.json({
            code: 200,
            data: dataList
        })
    }catch(err){
        next(err)
    }
})


module.exports = router