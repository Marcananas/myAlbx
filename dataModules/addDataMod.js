const connection = require('./commonMod')
module.exports = {
    savePost(data, callback) {
        console.log(data)
        var sql = 'INSERT posts VALUES(null,?,?,?,?,?,0,0,?,?,?)'
        connection.query(sql, [data.slug, data.title, data.feature, data.created, data.content, data.status, data.user_id, data.category_id], (err, response) => {
            if (err) {
                callback(err)
            } else {
                callback(null)
            }
        })
    },
    postById(data, callback) {
        connection.query()
    }
}