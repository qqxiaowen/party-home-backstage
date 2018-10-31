const express =require('express')
const router = express.Router()

const common = require('../database/model/common')
const topic = require('../database/model/topic')
const adminauth = require('./adminauth')
const auth = require('./auth')
// 添加一条评论
router.post('/',auth,async(req,res,next) => {
    try{
        let {content, topic_id} = req.body;
        let user_id = req.session.user._id
        let topicdata = await topic.findById(topic_id) //查找主题
        if(topicdata){ //如果存在这个主题
            let commondata = await common.create({content, topic:topic_id,user:user_id})
            console.log('123',commondata)
            await topicdata.update({$push: {common: commondata._id}})
            res.json({
                code:200,
                msg:'添加评论成功',
                data:commondata
            })
        }else{
            res.json({
                code:401,
                msg:'不存在此主题'
            })
        }
        
       
    }catch(err){
        next(err)
    }
})
// 查看某条主题下的所有评论
router.get('/bytopic/:id',async(req,res,next) => {
    try{
        let {id} = req.params;
        let{pn=1,size=10} = req.query;
        pn = parseInt(pn)
        size = parseInt(size)
        let count = await common.count({topic:id})
        let data = await common.find({topic:id})
                        .limit(size)
                        .skip((pn-1)*size)
                        .sort({_id:1})
                        .populate({
                            path:'user',
                            select:'username nicheng avatar'
                        })
        res.json({
            code:200,
            msg:'获取主题下的评论成功',
            data,
            count
        })
    }catch(err){
        next(err)
    }
})
// 删除某条评论
router.delete('/:id',adminauth,async(req,res,next) => {
    try{
        let {id} = req.params;
        await common.deleteOne({_id:id})
        res.json({
            code:200,
            msg:'删除评论成功'
        })
    }catch(err){
        next(err)
    }
})
module.exports = router