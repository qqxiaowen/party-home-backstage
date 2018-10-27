const express = require('express')
const router = express.Router();

const category = require('../database/model/category')
const news = require('../database/model/news')
const adminauth = require('./adminauth')

// 创建单条分类
router.post('/',adminauth, async(req,res,next) => {
    try{
        let{ title, icon } =req.body;
        let data = await category.create({title, icon})
        res.json({
            code:200,
            msg:'创建分类成功',
            data
        })

    }catch(err){
        next(err)
    }
})
// 获取全部分类
router.get('/', async (req,res,next) => {
    try{
        let data = await category.find()
        res.json({
            code:200,
            msg:'获取分类成功',
            data
        })
    }catch(err){
        next(err)
    }
})
// 获取单条分类
router.get('/:id', async(req,res,next) => {
    try{
        let { id } = req.params;
        let data = await category.findById(id) 
        res.json({
            code:200,
            msg:'获取单条分类成功',
            data
        })
    }catch(err){
        next(err)
    }
})
// 修改单条分类
router.put('/:id',adminauth, async(req,res,next) => {
    let {id} = req.params;
    let {title,icon} =req.body
    await category.update({_id:id},{$set:{title,icon}})
    res.json({
        code:200,
        msg:'修改分类成功'
    })
})
// 删除单条分类
router.delete('/:id',adminauth, async(req,res,next) => {
    try{
        let {id} = req.params;
        await category.deleteOne({_id:id})
        res.json({
            code:200,
            msg:'删除成功'
        })
    }catch(err){
        next(err)
    }
})
// 获取某条分类下的新闻
router.get('/:typeId/news',async(req,res,next) => {
    try{
        let {typeId} = req.params;
        let {pn=1,size=10} = req.query;
        pn = parseInt(pn);
        size = parseInt(size);
        let count = await news.count({type:typeId}) //获取总数
        let data = await news.find({type:typeId})
                            .limit(size)
                            .skip((pn-1)*size)
                            .populate({
                                path:'author',
                                select:' nicheng username'
                            })
        res.json({
            code:200,
            msg:'获取某分类下的新闻',
            data,
            count
        })
    }catch(err){
        next(err)
    }
})



module.exports = router
