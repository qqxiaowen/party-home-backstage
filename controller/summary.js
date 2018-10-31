const express = require('express')
const router = express.Router()

const auth = require('./auth')
const summary = require('../database/model/summary')

// 提交个人总结
router.post('/',auth,async(req,res,next) => {
    try{
        let id = req.session.user._id
        let finddata = await summary.findOne({user:id})
        console.log(finddata)
        if(finddata){ //如果提交过
            res.json({
                code:401,
                msg:'已提交过总结'
            })
        }else{
            let {contents} = req.body;
            console.log(contents)
            let data = await summary.create({user:id,contents:contents})
            // let data = await new summary({user:id, contents})
            // await data.save()
            res.json({
                code:200,
                msg:'提交个人总结成功',
                data
            })
        }
    }catch(err){
        next(err)
    }
})
// 获取单个用户总结
router.get('/:id',auth,async(req,res,next) => {
    try{
        let {id} = req.params;
        let datafind = await summary.findOne({user:id})
        if(datafind){ //该用户提交过个人总结
            res.json({
                code:200,
                msg:'获取个人总结成功',
                data:datafind
            })
        }else{ // 该用户未提交个人总结
            res.json({
                code:401,
                msg:'该用户尚未提交个人总结'
            })
        }
    }catch(err){
        next(err)
    }
})


module.exports = router