const mongoose = require('mongoose')
const Schema = mongoose.Schema

const integral = new Schema({
user:{
    type:mongoose.SchemaTypes.ObjectId,
    ref:'user'
},
// marks:[
//     {
//         type:mongoose.SchemaTypes.Mixed,
//         mark:Number,
//         category: String
//     }
// ]
type: {
    type: Number
},
mark: {
    type: Number
}

},{versionKey: false, timestamps: { createdAt: 'createTime',updatedAt:'updateTime' } })

module.exports = mongoose.model('integral', integral)