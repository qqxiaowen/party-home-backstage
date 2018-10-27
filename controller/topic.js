const express = require('express');
const router = express.Router();

const auth = require('./auth')
const adminauth = require('./adminauth')
const topic = require('../database/model/topic')
// 添加一个主题
router.post('/',auth,async(req,res,next) => {
    try{    
        let {content} = req.body;
        let user_id = req.session.user._id
        let data = await topic.create({content,user:user_id})
        console.log(user_id)
        res.json({
            code:200,
            msg:'创建主题成功',
            data
        })
    }catch(err){
        next(err)
    }
})
// 获取所有的主题
router.get('/',async(req,res,next) => {
    try{
        let {pn=1,size=10} = req.query;
        pn = parseInt(pn);
        size = parseInt(size);
        let count = await topic.count();
        let data = await topic.find()
                    .limit(size)
                    .skip((pn-1)*size)
                    .sort({_id:-1})
                    .populate({
                        path:'user',
                        select:'username nicheng avatar'
                    })
        res.json({
            code:200,
            msg:'获取全部主题',
            data,
            count
        })
    }catch(err){
        next(err)
    }
})
// 获取单个主题
router.get('/:id',async(req,res,next) => {
    try{
        let {id} = req.params;
        let data = await topic.findById(id)
                    .populate({
                        path:'user',
                        select:'username nicheng avatar'
                    })
        res.json({
            code:200,
            msg:'获取单个主题成功',
            data
        })
    }catch(err){
        next(err)
    }
})
// 删除单个主题 
router.delete('/:id',adminauth,async(req,res,next) => {
    try{
        let {id} = req.params;
        await topic.deleteOne({_id:id})
        res.json({
            code:200,
            msg:'删除主题成功'
        })
    }catch(err){
        next(err)
    }
})

module.exports = router;