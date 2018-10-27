var express = require('express');
var router = express.Router();

const jwt = require('jsonwebtoken');
const users = require('../database/model/adminuser')
const news = require('../database/model/news')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.use('/admin',require('../controller/adminuser'))
router.use('/user',require('../controller/generaluser'))
router.use('/ddyj/news',require('../controller/news'))
router.use('/ddyj/category',require('../controller/category'))
router.use('/ddyj/swiper',require('../controller/swiper'))
router.use('/ddyj/topic',require('../controller/topic'))
router.use('/ddyj/common',require('../controller/common'))

// jwt demo
router.post('/jwt/login', async(req,res,next) =>{
    try{
        let {username,password} = req.body;
        let finduser = await users.findOne({username})
        if(finduser){
            if(password == finduser.password){
                const token = jwt.sign({ userId: finduser._id }, 'myMiYao', { expiresIn: 60*60*7});
                res.json({
                    code:200,
                    msg:"登录成功",
                    data:finduser,
                    token
                })
            }else{
                res.json({
                    code:401,
                    msg:'密码错误'
                })
            }
        }else{
            res.json({
                code:401,
                msg:'该用户不存在'
            })
        }
    }catch(err){
        next(err)
    }
})
router.get('/jwt/news1', async(req,res,next) => {
    let data = await news.find()
    res.json({
        code:200,
        msg:'获取ok',
        data
    })
})
router.get('/jwt/news2', (req,res) => {
    let token = req.body.token || req.query.token || req.headers.token
    if(token){
        jwt.verify(token, 'myMiYao', function(err, decoded) {
            console.log(decoded)
            if(err){ //如果解密出错
                res.json({
                    code:405,
                    msg:'token已过期或token不对'
                })
                return
            }else{ // 如果解密成功
                users.findOne({_id:decoded.userId}).then(user => {
                    if(user){
                        news.find().then(data => {
                            res.json({
                                code:200,
                                msg:'获取新闻ok',
                                data:{
                                    user:user,
                                    data:data
                                }
                            })
                        })
                    }else{
                        res.json({
                            code:403,
                            msg:'token不对'
                        })
                    }
                })
            }
        });
    }else{
        res.json({
            code:401,
            msg:'缺少token'
        })
    }
})

module.exports = router;
