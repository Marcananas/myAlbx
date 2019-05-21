const postsDataMod = require('../dataModules/postsDataMod')
// 获取所有文章列表数据
exports.getPosts = (req, res) => {
    postsDataMod.getAllPosts(req.query, (err, data) => {
        console.log(req.query)
        if (err) {
            res.end('404')
        } else {
            res.json(data)
        }
    })
}
// 删除文章功能
exports.delPosts = (req, res) => {
    postsDataMod.delPostsById(req.body, (err) => {
        if (err) {
            res.json({
                code: 201,
                msg: '删除失败'
            })
        } else {
            res.json({
                code: 200,
                msg: '删除成功'
            })
        }
    })
}