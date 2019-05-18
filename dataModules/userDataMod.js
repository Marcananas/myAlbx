const connection = require('./commonMod')
// 在数据库中查找是否有用户键入的邮箱
exports.getUserByEmail = (email, callback) => {
    connection.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
        if (err) {
            callback(err)
        } else {
            // console.log(results)
            callback(null, results[0])
        }
    })
}                                                                     