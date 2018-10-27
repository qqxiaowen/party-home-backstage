const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminusers = new Schema({
  username:{
      type:String,
      unique: true,
      require:true,
  },
  password:{
    type:String,
    require:true,
  },
  nicheng:String,
  avatar:String,
  desc:String,
  job:String,
  phone:String,
  sex:Number

},{versionKey: false, timestamps: { createdAt: 'createTime',updatedAt:'updateTime' } });

module.exports = mongoose.model("adminuser", adminusers)