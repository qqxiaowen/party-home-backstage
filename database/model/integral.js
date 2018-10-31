const mongoose = require('mongoose')
const Schema = mongoose.Schema

const integral = new Schema({
user:{
    type:mongoose.SchemaTypes.ObjectId,
    ref:'user'
},
marks:[
    {
        type:String,
        mark:Number,
    }
]

},{versionKey: false, timestamps: { createdAt: 'createTime',updatedAt:'updateTime' } })

module.exports = mongoose.model('integral', integral)