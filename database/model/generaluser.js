const mongoose = require('mongoose')
const Schema = mongoose.Schema

const generalusers = new Schema({
    username:{
        type:String,
        unique: true,
        require:true,
    },
    password:{
      type:String,
      require:true,
    },
    partyStatus:{ //身份类型
        type:Number,
        default:0,
    },
    branchStatus:{ //支部类型
        type:Number,
        default:3,
    },
    nicheng:String,
    avatar:String,
    desc:String,
    job:String,
    phone:String,
    sex:Number,
    education:{//最高学历
        type:String,
        default:'大学'
    }, 


},{versionKey: false, timestamps: { createdAt: 'createTime',updatedAt:'updateTime' } })

module.exports = mongoose.model('user', generalusers)