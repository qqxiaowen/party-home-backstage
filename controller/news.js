const express = require('express')
const router = express.Router()

const news = require('../database/model/news')
const adminauth = require('./adminauth')
const integral =require('../database/model/integral')
const swiper = require('../database/model/swiper')

// 添加新闻
router.post(`/`,adminauth, async (req,res,next) => {
   try{
    let {title,content,contentText,img,author,type} = req.body;
    let data = await news.create({title,content,contentText,img,author,type})
    res.json({
        code:200,
        msg:'添加新闻成功',
        data
    })
   }catch(err){
       next(err)
   }
})

// 获取所有新闻
router.get('/', async (req,res,next) => {
    try{
        let {pn=1,size=10} = req.query;
        pn = parseInt(pn);
        size = parseInt(size);
        let count = await news.count();
        let data = await news.find()
                    .skip((pn-1)*size)
                    .limit(size)
                    .sort({_id:-1})
                    .populate({
                        path:'author',
                        select:'nicheng avatar username'
                    })
                    .populate({
                        path:'type',
                    })
        
        res.json({
            code:200,
            msg:'获取新闻成功',
            data,
            count
        })
    }catch(err){
        next(err)
    }
})

// 获取单条新闻
router.get(`/:id`, async (req,res,next) => {
    try{
        let {id} = req.params;
        const data = await news.findById(id)
                .populate({
                    path:'author',
                    select:'nicheng avatar username'
                })
                .populate({
                    path:'type'
                })
                
            await data.update({$inc:{look_num:1}}) //自更新look_num 使其加1
            if(req.session&&req.session.user){
                await integral.create({user: req.session.user._id, type: 5, mark: 1})
            }
        res.json({
            code:200,
            msg:'获取单条新闻成功',
            data
        })
    }catch(err){
        next(err)
    }
})

// 修改单条新闻
router.put(`/:id`,adminauth, async(req,res,next) => {
    try{
        let {id} = req.params;
        let {title,content,contentText,img,author,type} = req.body;
        let data = await news.updateOne({_id:id},{$set:{title,content,contentText,img,author,type}})
        res.json({
            code:200,
            msg:'修改新闻成功',
            data
        })
    }catch(err){
        next(er)
    }
})

// 删除单条新闻
router.delete(`/:id`,adminauth, async (req,res,next) => {
    try{
        let {id} = req.params;
        let swiperdata = await swiper.findOne({newsId:id})
        if(swiperdata){
            res.json({
                code:401,
                msg:swiperdata.title+' 下还有该新闻，请先修改或删除轮播图'
            })
        }else{
            await news.deleteOne({_id:id})
            res.json({
                code:200,
                msg:'删除成功'
            })
        }
            
    }catch(err){
        next(err)
    }
})

module.exports = router