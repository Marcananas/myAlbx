var querystring = require('querystring')
// 前台页面渲染
exports.getIndex = (req, res) => {
    res.render('index.ejs')
}
exports.getDetail = (req, res) => {
    res.render('detail.ejs')
}
exports.getList = (req, res) => {
    res.render('list.ejs')
}
// 后台页面渲染
exports.getAdmin = (req, res) => {
    var mycookie = querystring.parse(req.headers.cookie)
    if (mycookie.isLogin && mycookie.isLogin == 'true') {
        // // 下面这个配置的作用是配置ejs的模板文件夹，以后ejs会自动的去指定的目录下寻找页面文件
        // app.set('views',__dirname + '/views')
        res.render('admin/index.ejs')
    } else {
        res.render('admin/login.ejs')
    }
}
exports.getCategories = (req, res) => {
    res.render('admin/categories.ejs')
}
exports.getComments = (req, res) => {
    res.render('admin/comments.ejs')
}
exports.getLogin = (req, res) => {
    res.render('admin/login.ejs')
}
exports.getNavMenus = (req, res) => {
    res.render('admin/nav-menus.ejs')
}
exports.getPasswordReset = (req, res) => {
    res.render('admin/password-reset.ejs')
}
exports.getPostAdd = (req, res) => {
    res.render('admin/post-add.ejs')
}
exports.getPosts = (req, res) => {
    res.render('admin/posts.ejs')
}
exports.getProfile = (req, res) => {
    res.render('admin/profile.ejs')
}
exports.getSettings = (req, res) => {
    res.render('admin/settings.ejs')
}
exports.getSlides = (req, res) => {
    res.render('admin/slides.ejs')
}
exports.getUsers = (req, res) => {
    res.render('admin/users.ejs')
}