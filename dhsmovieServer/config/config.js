// 配置数据库地址
var mongoUrl = "mongodb://localhost/dhsmovie"
// 引入邮箱验证第三方库
const nodemailer = require('nodemailer');

// -----------------设置邮箱配置-----------------
var Email = {
  // 配置发送人
  config: {
    host: "smtp.qq.com",
    port: 587,
    auth: {
      user: '508766975@qq.com',
      pass: 'xlmsaxydpzktcbaa'
    },
  },
  get transporter() {
    return nodemailer.createTransport(this.config);
  },
  get verify() {
    return Math.random().toString().substring(2, 6);
  },
  get startTime(){
    return Date.now()
  }
}
// -----------------设置头像URL方便以后更改域名-----------------
var uploadUrl = {
  baseUrl: 'http://localhost:3000/upload/avatars/'
}

module.exports = { 
  mongoUrl,
  Email,
  uploadUrl
}