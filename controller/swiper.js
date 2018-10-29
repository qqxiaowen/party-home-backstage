const express = require('express')
const router = express.Router()

const adminauth = require('./adminauth')
const swiper = require('../database/model/swiper')
// 添加轮播图
router.post('/', adminauth, async(req,res,next) => {
    try{
        let { title, img, newsId, status, sort} = req.body
        let data = await swiper.create({title, img, newsId, status, sort})
        res.json({
            code:200,
            msg:'创建轮播图成功',
            data
        })
    }catch(err){
        next(err)
    }
})
// 获取全部显示的轮播图
router.get('/', async(req,res,next) => {
    try{
        let {pn=1,size=10} = req.query
        pn = parseInt(pn)
        size = parseInt(size)
        let count = await swiper.count({status:1})
        let data = await swiper.find({status:1})
                    // .populate({
                    //     path:'newsId',
                    // })
                    .limit(size)
                    .skip((pn-1)*size)
                    .sort({sort:-1, _id:-1})
        res.json({
            code:200,
            msg:'获取轮播图成功',
            data,
            count
        })
    }catch(err){
        next(err)
    }
})
// 获取全部轮播图
router.get('/all',async(req,res,next) =>{
    try{
        let {pn=1,size=10} = req.query
        pn = parseInt(pn)
        size = parseInt(size)
        let count = await swiper.count()
        let data = await swiper.find()
                    .populate({
                        path:'newsId',
                    })
                    .limit(size)
                    .skip((pn-1)*size)
                    .sort({sort:-1, _id:-1})
        res.json({
            code:200,
            msg:'获取轮播图成功',
            data,
            count
        })
    }catch(err){
        next(err)
    }
} )
// 获取单个轮播图
router.get(`/:id`,async(req,res,next) => {
    try{
        let {id} = req.params
        let data = await swiper.findById(id)
                        .populate({
                            path:'newsId',
                        })
        res.json({
            code:200,
            msg:'获取单个轮播图成功',
            data
        })
    }catch(err){
        next(err)
    }
    
})
// 修改单个轮播图
router.put(`/:id`,adminauth,async(req,res,next) => {
    try{
        let {id} = req.params;
        let {title, img, newsId, status, sort} = req.body;
        await swiper.updateOne({_id:id},{$set:{title, img, newsId, status, sort}})
        res.json({
            code:200,
            msg:'修改轮播图成功'
        })
    }catch(err){
        next(err)
    }
})
// 删除单个轮播图
router.delete(`/:id`,adminauth,async(req,res,next) => {
    try{
        let {id} = req.params;
        await swiper.deleteOne({_id:id})
        res.json({
            code:200,
            msg:'删除成功'
        })
    }catch(err){
        next(err)
    }
})

module.exports = router