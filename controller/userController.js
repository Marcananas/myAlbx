const userModule = require('../dataModules/userDataMod')
exports.login = (req, res) => {
    // console.log(req.body)
    userModule.getUserByEmail(req.body.email, (err, data) => {
        if (err) {
            // console.log(err)
            res.json({
                code: 201,
                msg: '服务器异常'
            })
        } else {
            // 如果数据库有对应的邮箱，会返回邮箱对应的全部数据
            if (data) {
                // 判断用户键入的密码和数据库返回数据是否一致
                if (data.password == req.body.password) {
                    // 登录成功的同时通过session设置cookie
                    req.session.isLogin = 'true'
                    req.session.currentUser = data
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