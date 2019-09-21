var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// 引入mongoose组件
var mongoose = require('mongoose');
// 引入session中间件
var session = require('express-session');
// 引入body-parser
var bodyParser = require('body-parser');
// 引入数据库地址
var { mongoUrl } = require('./config/config')
var app = express();
// 引入管理员路由
var adminRouter = require('./routes/admin')

app.use(session({
  secret: 'daheishuai',
  name: 'sessionId',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60
  }
}))

// 连接数据库
mongoose.connect(mongoUrl)
  .then(() => console.log('连接数据库成功'))
  .catch(() => console.log('连接数据库失败'))

// 使用body-parser中间将
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api2/users', usersRouter);
app.use('/api2/admin', adminRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
