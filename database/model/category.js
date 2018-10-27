const mongoose =require('mongoose')
const Schema = mongoose.Schema

const categories = new Schema({
    title:{
        type:String,
        unique: true,
        require:true,
    },
    icon:String

},{versionKey: false, timestamps: { createdAt: 'createTime',updatedAt:'updateTime' } })

module.exports = mongoose.model('category',categories)
