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