const mysql = require('mysql')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'baixiu'
})
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