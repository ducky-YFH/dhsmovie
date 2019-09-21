var express = require('express');
var router = express.Router();
var controller = require('../controller/user')
// 引入上传文件的库
const multer = require('multer')
const upload = multer({ dest: 'public/upload/avatars/' })

/* GET users listing. */
router.get('/', function (req, res) { res.send('respond with a resource'); });
router.get('/verify', controller.verify);
router.post('/register', controller.register);
router.post('/login', controller.login);
router.get('/logout', controller.logout);
router.get('/getUser', controller.getUser);
router.post('/findPassword', controller.findPassword);
router.get('/captcha', controller.getCaptcha)
router.post('/uploadAvatar', upload.single('imgFile') , controller.uploadAvatar)

module.exports = router;
