
# dhsmovie
# 运行环境：node.js、mongodb
# 项目预览地址：http://47.94.17.221/dhsmovie
### (提示：本项目支持中文搜索电影)
# 一. 电影部分

### 喵喵电影教程提供的API
| 接口名称 | 请求方式 | 请求参数                 | 请求地址                                |
| -------- | -------- | ------------------------ | --------------------------------------- |
| 正在热映 | get      | cityId                   | http://39.97.33.178/api/movieOnInfoList |
| 即将上映 | get      | cityId                   | http://39.97.33.178/api/movieComingList |
| 搜索     | get      | cityId、kw(电影名字拼音) | http://39.97.33.178/api/searchList      |
| 城市     | get      | 没有                     | http://39.97.33.178/api/cityList        |
| 电影详情 | get      | movieId                  | http://39.97.33.178/api/detailmovie     |
| 影院     | get      | cityId                   | http://39.97.33.178/api/cinemaList      |
| 城市定位 | get      | 没有                     | http://39.97.33.178/api/getLocation     |

### 安装模块
```
npm install i
```
### 运行项目
```
npm run serve
```
### 打包命令
```
npm run build
```
# 二. 登录部分（用node.js express框架搭建运行服务）
### 用户相关API

## user
| 接口名称         | 请求方式 | 请求参数                                        | 请求地址                                    |
| ---------------- | -------- | ----------------------------------------------- | ------------------------------------------- |
| 获取邮箱验证码   | get      | email                                           | http://47.94.17.221/api2/users/verify       |
| 注册             | post     | email、username、password、verify（邮箱验证码） | http://47.94.17.221/api2/users/register     |
| 登录             | post     | emai、password、captcha（接口生成的验证码）     | http://47.94.17.221/api2/users/login        |
| 退出登录         | get      | 没有                                            | http://47.94.17.221/api2/users/logout       |
| 获取当前登录信息 | get      | 没有                                            | http://47.94.17.221/api2/users/getUser      |
| 找回密码         | post     | email、password、verify（邮箱验证码）           | http://47.94.17.221/api2/users/findPassword |
| 生成验证码       | get      | 没有                                            | http://47.94.17.221/api2/users/captcha      |
| 上传头像         | post     | 没有                                            | http://47.94.17.221/api2/users/uploadAvatar |

### 进入后台服务文件夹
```
cd dhsmovieServer 
```
### 安装模块
```
npm i
```
### 运行后台服务提供用户相关的API
```
npm run serve
```

