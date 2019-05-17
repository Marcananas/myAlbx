// 引入express
const express = require('express')
// 引入ejs
const ejs = require('ejs')
const bodyParser = require('body-parser')
const session = require('express-session')
// 引入路由模块
const router = require('./router')
// 创建服务器
var app = express()
// 监听端口3011
app.listen(3012, () => {
    console.log('http://127.0.0.1:3012');
})
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
// 实现静态资源托管
app.use(express.static("assets"))
// bodyparser 用来解析post的请求取代了 原生的 req.on 的方式 但是只能取到ajax 和表单的数据 ，取不到上传的文件类型。
app.use(bodyParser.urlencoded({ extended: false }))
app.use(session({
    secret: 'mywords',
    resave: false,
    saveUninitialized: false
}))
app.use((req, res, next) => {
    if (req.session.isLogin && req.session.isLogin == 'true' || req.url.indexOf('/admin') == -1 || req.url == '/admin/login') {
        next()
    } else {
        res.redirect('/admin/login')
    }
})
// 使用use中间件在当前应用上挂载路由配置
app.use(router)