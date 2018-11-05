const express =require('express')
const router = express.Router();

const adminuser = require('../database/model/adminuser')
const adminauth = require('./adminauth')
const auth = require('./auth')

// 注册管理员用户
router.post('/user',adminauth, async (req,res,next) => {
    try{
        let{username,password,nicheng,desc,avatar,job,phone,sex} = req.body;
        let finddata = await adminuser.findOne({username})
        if(!username||!password){
            res.json({
                code:403,
                msg:'缺少必要参数' 
            })
        }else if(finddata){
            res.json({
                code:401,
                msg:'该用户名已被注册'
            })
        } else{
            
            if(!avatar){
                let avatarNumber = Math.floor(Math.random()*9)
                avatar = `http://pbl.mawenli.xyz/avatar${avatarNumber}.png`
            }
            const data = await adminuser.create({username,password,nicheng,avatar,desc,job,phone,sex})

            res.json({ // count未加
                code: 200,
                data,
                msg: '添加管理员用户成功'
            })
        }
        
    }catch(err){
        next(err)
    }
})

// 用户登录
router.post('/login', async (req,res,next) => {
    try{
        let {username, password} = req.body;
        let finddata = await adminuser.findOne({username})
        if(username&&password){
            if(!finddata){
                res.json({
                    code:401,
                    msg:'该用户不存在'
                })
            }else if(finddata.password == password){
                req.session.user = finddata;
                res.json({
                    code:200,
                    msg:'登录成功',
                    data:finddata
                })
            }else{
                res.json({
                    code:401,
                    msg:'密码错误'
                })
            }
        }else{
            res.json({
                code:403,
                msg:'缺少用户名或密码'
            })
        }
       
    }catch(err){
        next(err)
    }
})
// 退出登录
router.get(`/logout`, auth , (req,res) => {
    req.session.user = ''
    res.json({
        code:200,
        msg:'退出登录成功'
    })
})

// 获取全部管理员用户
router.get(`/user`,adminauth,async (req,res,next) => {
    try{
        let {pn=1,size=10} = req.query;
        pn = parseInt(pn)
        size = parseInt(size)

        let data =  await adminuser.find()
            .skip((pn-1)*size)
            .limit(size)
            .select('-password')
        let count = await adminuser.count()
        res.json({
            code:200,
            msg:'获取管理员成功',
            data,
            count
        })
    }catch(err){
        next(err)
    }
})

// 获取单个管理员用户
router.get(`/user/:id`,adminauth, async (req,res,next) => {
    try{
        let {id} = req.params;
        let data = await adminuser.findById({_id:id})
        // .select('-password')
        if(data){
            res.json({
                code:200,
                msg:'获取单个用户成功',
                data
            })
        }else{
            res.json({
                code:401,
                msg:'传入的id值有误'
            })
        }
   }catch(err){
       next(err)
   }
   
})

// 修改单个管理员用户
router.put(`/user/:id`,adminauth, async (req,res,next) => {
    try{
        let {id} = req.params;
        let {password,nicheng,desc,avatar,job,phone,sex} = req.body;
        let data = await adminuser.updateOne({_id:id},{$set:{password,nicheng,desc,avatar,job,phone,sex}})
        res.json({
            code:200,
            msg:'修改成功',
        })
    }catch(err){
        next(err)
    }
    
})

// 删除单个管理员用户
router.delete(`/user/:id`,adminauth,async (req,res,next) => {
    try{
        let {id} = req.params;
        await adminuser.deleteOne({_id:id})
        res.json({
            code:200,
            msg:'删除成功'
        })
    }catch(err){
        next(err)
    }
   
})

module.exports = router