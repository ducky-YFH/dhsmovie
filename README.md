# dhsmovie
# 运行环境：node.js、mongodb
# 项目预览地址：http://47.94.17.221
# 一. 前台
### 喵喵电影教程提供的API
正在热映
http://39.97.33.178/api/movieOnInfoList?cityId=10

即将上映
http://39.97.33.178/api/movieComingList?cityId=10

搜索
http://39.97.33.178/api/searchList?cityId=10&kw=a

城市
http://39.97.33.178/api/cityList

电影详情
http://39.97.33.178/api/detailmovie?movieId=345808

影院
http://39.97.33.178/api/cinemaList?city=10

城市定位
http://39.97.33.178/api/getLocation


### 安装前台依赖包
```
npm install i
```

### 运行项目命令
```
npm run serve
```

### 打包命令
```
npm run build
```

# 二. 后台（用node.js express框架搭建后台运行服务）

### 进入后台服务文件夹
```
cd dhsmovieServer 
```
### 安装模块
```
npm i
```
### 运行后台服务提供用户相关的API
```
npm run serve
```