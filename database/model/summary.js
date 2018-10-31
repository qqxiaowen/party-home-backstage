const mongoose = require('mongoose')
const Schema = mongoose.Schema

const summaries = new Schema({
user:{
   type:mongoose.SchemaTypes.ObjectId,
   ref:'user'
},
contents: [String],
// grades:[
//     {
//         user:{
//             type:mongoose.SchemaTypes.ObjectId,
//             ref:'user'
//         },
//         grade:Number   
//     }
// ]


},{versionKey: false, timestamps: { createdAt: 'createTime',updatedAt:'updateTime' } })

module.exports = mongoose.model('summary', summaries)