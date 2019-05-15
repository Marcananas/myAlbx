// 引入express
const express = require('express')
// 引入页面控制器模块
const pagesController = require('./controller/pagesController')
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

module.exports = router