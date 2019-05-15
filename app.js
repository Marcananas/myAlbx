// 引入express
const express = require('express')
// 引入ejs
const ejs = require('ejs')
const bodyParser = require('body-parser')
// 引入路由模块
const router = require('./router')
// 创建服务器
var app = express()
// 监听端口3011
app.listen(3011, () => {
    console.log('http://127.0.0.1:3011');
})
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
// 实现静态资源托管
app.use(express.static("assets"))
app.use(bodyParser.urlencoded({ extended: false }))
// 使用use中间件在当前应用上挂载路由配置
app.use(router)