const mysql = require('mysql')
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'baixiu'
})
exports.getUserByEmail = (email, callback) => {
    connection.query('SELECT * FROM users WHERE email =' + email, (err, results) => {
        if (err) {
            callback(err)
        } else {
            callback(null, results[0])
        }
    })
}