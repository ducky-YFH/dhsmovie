var { Email } = require('../config/config');
var { UserModel } = require('../model/user');
var bcrypt = require('bcrypt')
// 引入验证码第三方库
const svgCaptcha = require('svg-captcha')
const fs = require('fs')
const url = require('url')
const { uploadUrl } = require('../config/config')

/* 
生成登录验证码
@router /api2/users/captcha
@type GET
*/
var getCaptcha = async (req, res) => {
  const cap = svgCaptcha.createMathExpr({
    // // 翻转颜色 
    inverse: false,
    // 字体大小 
    fontSize: 36,
    // 噪声线条数 
    noise: 2,
    // 宽度 
    width: 80,
    // 高度 
    height: 30,
  });
  req.session.captcha = cap.text;
  res.type('svg'); // 响应的类型
  res.send(cap.data);
}

/* 
发送邮箱验证码处理函数
@route /api2/users/verify
@type GET
@params email
*/
var verify = async (req, res) => {
  var email = req.query.email;
  var verify = Email.verify;

  req.session.verify = verify;
  req.session.email = email;
  // 邮箱信息
  var mailOptions = {
    from: '大黑帅电影 508766975@qq.com',
    to: email,
    subject: '大黑帅邮箱验证码',
    text: '验证码：' + verify
  }
  await Email.transporter.sendMail(mailOptions, (err) => {
    if (!err) {
      req.session.startTime = Email.startTime;
      res.send({
        msg: '验证码发送成功',
        status: 0
      })
    } else {
      res.send({
        msg: '验证码发送失败',
        status: -1
      })
    }
  })

}
/* 
实现注册接口处理函数
@route /api2/users/register
@type POST
@params username、password、email、verify
*/
var register = async (req, res) => {
  var { username, password, email, verify } = req.body;
  if (email !== req.session.email || verify !== req.session.verify) {
    res.send({
      msg: '验证码错误',
      status: -1
    })
  } else {
    UserModel.findOne({ email: email })
      .then((user) => {
        if (user) {
          return res.send({ msg: '邮箱已被注册', status: -1 })
        } else {
          const newUser = new UserModel({
            username: username,
            password: password,
            email: email
          })
          let endTime = Date.now()
          if (((endTime - req.session.startTime) / 1000) > 60) {
            return res.send({
              msg: '验证码已过期',
              status: -1
            })
          }
          bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) throw err;
              newUser.password = hash;
              newUser.save()
                .then(() => res.send({ msg: '注册成功', status: 0 }))
                .catch(() => res.send({ msg: '注册失败', status: -2 }))
            });
          });
        }
      })
  }
}
/* 
实现登录接口处理函数
@route /api2/users/login
@type POST
@params email password captcha
*/
var login = async (req, res) => {
  // eslint-disable-next-line no-console
  console.log(req.session.captcha)
  let { email, password, captcha } = req.body;
  UserModel.findOne({ email })
    .then((user) => {
      if (!user) {
        return res.json({
          msg: '用户不存在',
          status: '-1'
        })
      }
      if (user.isFreeze) {
        return res.json({
          msg: '账号已冻结',
          status: '-1'
        })
      } else {
        // 判断验证码是否一样
        if (req.session.captcha !== captcha) {
          return res.send({
            msg: '验证码错误！',
            status: '-1'
          })
        }
        // 密码匹配
        bcrypt.compare(password, user.password) //输入密码和数据库密码匹配
          .then(isMatch => {
            if (isMatch) {
              req.session.username = user.username
              req.session.isAdmin = user.isAdmin
              req.session.avatarUrl = user.avatarUrl
              req.session.email = user.email
              return res.json({ msg: '登录成功', status: 0 })
            } else {
              return res.json({
                msg: '密码错误！',
                status: '-1'
              });
            }
          })
      }
    })
}
/* 
实现登录接口处理函数
@route /api2/users/logout
@type GET
@action  清除session
*/
var logout = async (req, res) => {
  req.session.username = '';
  res.json({
    msg: '退出成功',
    status: 0
  })
}

/* 
获取登录用户名称
@router /api2/users/getUser
@params  session.username
*/
var getUser = async (req, res) => {
  if (req.session.username) {
    res.send({
      msg: '获取用户信息成功',
      status: 0,
      data: {
        username: req.session.username,
        isAdmin: req.session.isAdmin,
        avatarUrl: req.session.avatarUrl
      }
    });
  } else {
    res.send({
      msg: '获取用户信息失败',
      status: -1
    })
  }
}
/* 
修改密码
*/
var findPassword = async (req, res) => {
  var { email, verify, password } = req.body;
  if (email === req.session.email && req.session.verify === verify) {
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(password, salt, (err, hash) => {
        if (err) throw err;
        password = hash
        UserModel.update({ email }, { $set: { password } })
          .then(() => {
            res.send({
              msg: '修改密码成功！',
              status: 0
            })
          })
          .catch(() => {
            res.send({
              msg: '修改密码失败！',
              status: -1
            })
          })
        req.session.email = ''
        req.session.verify = ''
      });
    });
  } else {
    res.send({
      msg: '验证码错误！',
      status: -1
    })
  }
}
/* 
上传头像
@params  file
@type  post
*/
var uploadAvatar = async (req, res) => {
  // 将上传的文件名改为邮箱的名字
  let oldPath = 'public/upload/avatars/' + req.file.filename
  let newPath = 'public/upload/avatars/' + req.session.email + '.jpg'
  await fs.rename(oldPath, newPath, err => {
    if (err) {
      throw err
    }
  })
  // 更新数据库里的头像url
  let newUrl = url.resolve(uploadUrl.baseUrl, req.session.email + '.jpg')
  UserModel.update({ email: req.session.email }, { $set: { avatarUrl: newUrl } }).then((result) => {
    if (result) {
      res.send({
        msg: '更换成功',
        status: 0,
        avatarUrl: newUrl
      })
    } else {
      res.send({
        msg: '更换失败',
        status: -1
      })
    }
  })
}

module.exports = {
  register,
  verify,
  login,
  logout,
  getUser,
  findPassword,
  getCaptcha,
  uploadAvatar
}