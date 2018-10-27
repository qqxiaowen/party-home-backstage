const mongoose = require('mongoose')
const Schema = mongoose.Schema

const topic = new Schema({
    user:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'user'
    },
    common:[
        {
            type:mongoose.SchemaTypes.ObjectId,
            ref:'common'
        }
    ],
    content:{
        type:String,
        required:true
    }

},{versionKey: false, timestamps: { createdAt: 'createTime',updatedAt:'updateTime' } })

module.exports = mongoose.model('topic', topic)