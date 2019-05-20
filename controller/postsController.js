const postsDataMod = require('../dataModules/postsDataMod')
exports.getPosts = (req, res) => {
    postsDataMod.getAllPosts(req.query, (err, data) => {
        if (err) {
            res.end('404')
        } else {
            res.json(data)
        }
    })
}
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