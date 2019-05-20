// 引入express
const express = require('express')
// 引入页面控制器模块
const pagesController = require('./controller/pagesController')
const userController = require('./controller/userController')
const cateController = require('./controller/cateController')
const postsController = require('./controller/postsController')
// 创建路由模块
const router = express.Router()
// 返回前台页面
router
    .get('/', pagesController.getIndex)
    .get('/detail', pagesController.getDetail)
    .get('/list', pagesController.getList)
    // 返回后台页面
    .get('/admin', pagesController.getAdmin)
    .get('/admin/categories', pagesController.getCategories)
    .get('/admin/comments', pagesController.getComments)
    .get('/admin/login', pagesController.getLogin)
    .get('/admin/nav_menus', pagesController.getNavMenus)
    .get('/admin/password_reset', pagesController.getPasswordReset)
    .get('/admin/post_add', pagesController.getPostAdd)
    .get('/admin/posts', pagesController.getPosts)
    .get('/admin/profile', pagesController.getProfile)
    .get('/admin/settings', pagesController.getSettings)
    .get('/admin/slides', pagesController.getSlides)
    .get('/admin/users', pagesController.getUsers)
    // 登录操作数据处理
    .post('/login', userController.login)
    // 所有文章数据处理
    .get('/getPosts', postsController.getPosts)
    .post('/delPosts', postsController.delPosts)
    // 分类目录数据处理
    .get('/getCategories', cateController.getCategories)
    .post('/editCategories', cateController.editCategories)
    .post('/addCategories', cateController.addCategories)
    .post('/delCategories', cateController.delCategories)

module.exports = router