const addDataMod = require('../dataModules/addDataMod')
const formidable = require('formidable')
const path = require('path')
exports.uploadFile = (req, res) => {
    var form = new formidable.IncomingForm()
    form.encoding = 'utf-8'
    form.uploadDir = __dirname + "/../assets/uploads"
    form.keepExtensions = true
    form.parse(req, (err, fields, files) => {
        // console.log(files)
        if (err) {
            res.json({
                code: 201,
                msg: '上传失败'
            })
        } else {
            // console.log((files.img.path))
            res.json({
                code: 200,
                msg: '上传成功',
                img: path.basename(files.img.path)
            })
        }
    })
}
exports.addPost = (req, res) => {
    req.body['user_id'] = req.session.currentUser.id
    addDataMod.savePost(req.body, (err) => {
        if (err) {
            console.log(err)
            res.json({
                code: 201,
                msg: '保存失败'
            })
        } else {
            res.json({
                code: 200,
                msg: '保存成功'
            })
        }
    })
}
exports.getPost = (req, res) => {
    addDataMod.postById(req.body, (err, data) => {
        if (err) {
            console.log(err)
            res.json({
                code: 201,
                msg: '获取失败'
            })
        } else {
            res.json({
                code: 200,
                msg: '获取成功',
                data: data
            })
        }
    })
}