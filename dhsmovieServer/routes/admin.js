var express = require('express');
var router = express.Router();
var adminController = require('../controller/admin')

router.use((req, res, next) => {
  if (req.session.username && req.session.isAdmin) {
    next()
  }else{
    res.send({
      msg: '没有权限管理',
      status: -1
    })
  }
})


router.get('/', adminController.index);
router.get('/getUserList', adminController.getUserList)
router.post('/changeFreeze', adminController.changeFreeze)
router.post('/deleteUser', adminController.deleteUser)
module.exports = router;
