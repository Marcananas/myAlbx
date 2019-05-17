const userModule = require('../dataModuule/userDataMod')
exports.login = (req, res) => {
    console.log(req.body)
    userModule.getUserByEmail(req.body.email, (err, data) => {
        if (err) {
            res.json({
                code: 201,
                msg: '服务器异常'
            })
        } else {
            if (data) {
                if (data.password == req.body.password) {
                    res.json({
                        code: 200,
                        msg: '登录成功'
                    })
                } else {
                    res.json({
                        code: 201,
                        msg: '密码错误'
                    })
                }
            } else {
                res.json({
                    code: 201,
                    msg: '邮箱输入错误'
                })
            }
        }
    })
}