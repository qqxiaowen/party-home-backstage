const adminuser = require('../database/model/adminuser')

module.exports = function(req,res,next){
    if(req.session && req.session.user){ //登录后
        let id = req.session.user._id
        adminuser.findById(id).then(data => {
            if(data){ //管理员登录
                next()
            }else{
                res.json({
                    code:400,
                    msg:'权限不足'
                })
            }
        })
    }else{
        res.json({
            code:405,
            msg:'登录状态失效'
        })
    }
}