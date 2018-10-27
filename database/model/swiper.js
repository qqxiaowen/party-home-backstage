const mongoose = require('mongoose')
const Schema = mongoose.Schema

const swiper = new Schema({
    title:String,
    img:String,
    newsId:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'news'
    },
    status:{ //是否显示
        type:Number,
        default:1
    },
    sort:{  //排序号
        type:Number,
        default:1
    }


},{versionKey: false, timestamps: { createdAt: 'createTime',updatedAt:'updateTime' } })

module.exports = mongoose.model('swiper', swiper)