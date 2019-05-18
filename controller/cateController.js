const cateDataMod = require('../dataModules/cateDataMod')
// 响应分类目录数据
exports.getCategories = (req, res) => {
    cateDataMod.getAllCate((err, data) => {
        if (err) {
            console.log(err)
            res.end('404')
        } else {
            res.json(data)
        }
    })
}
exports.editCategories = (req, res) => {
    cateDataMod.eidtById(req.body, (err) => {
        if (err) {
            console.log(err)
            res.json({
                code: 201,
                msg: "编辑失败"
            })
        } else {
            res.json({
                code: 200,
                msg: "编辑成功"
            })
        }
    })
}
exports.addCategories = (req, res) => {
    cateDataMod.add(req.body, (err) => {
        if (err) {
            console.log(err)
            res.json({
                code: 201,
                msg: "添加失败"
            })
        } else {
            res.json({
                code: 200,
                msg: "添加成功"
            })
        }
    })
}