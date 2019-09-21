var { UserModel } = require('../model/user')
var index = async (req, res) => {
  res.send({
    msg: '管理员首页',
    status: 0
  })
}
var getUserList = async (req, res) => {
  UserModel.find().then(userList => {
    if (userList) {
      res.send({
        msg: "查询成功",
        data: userList,
        status: 0
      })
    } else {
      res.send({
        msg: '没有查询到数据',
        data: userList,
        status: -1
      })
    }
  })
}

var changeFreeze = async (req, res) => {
  var { email, isFreeze } = req.body
  UserModel.update({ email }, { $set: { isFreeze } }).then(result => {
    if (result) {
      res.send({
        msg: '冻结用户操作成功',
        status: 0
      })
    } else {
      res.send({
        msg: '冻结用户操作成功',
        status: 0
      })
    }
  })
}

var deleteUser = async (req, res) => {
  var { email } = req.body
  UserModel.findOneAndRemove({ email }).then(result => {
    if (result) {
      res.send({
        msg: '删除成功',
        status: 0
      })
    } else {
      res.send({
        msg: '删除失败',
        status: -1
      })

    }
  })
}

module.exports = {
  index,
  getUserList,
  changeFreeze,
  deleteUser
}