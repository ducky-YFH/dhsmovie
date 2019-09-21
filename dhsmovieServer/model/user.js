const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const url = require('url')
const { uploadUrl } = require("../config/config")

// 创建Schema
const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    index: { unique: true }
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  isAdmin:{
    type: Boolean,
    default: false
  },
  isFreeze: {
    type: Boolean,
    default: false
  },
  avatarUrl: {
    type: String,
    default: url.resolve(uploadUrl.baseUrl, 'default.jpg')
  }
})

var UserModel = mongoose.model("user", UserSchema)
module.exports = {
  UserModel
}