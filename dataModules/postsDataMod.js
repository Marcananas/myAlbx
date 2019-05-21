const connection = require('./commonMod')

exports.getAllPosts = (query, callback) => {
    var sql = `SELECT
               posts.id,
               posts.title,
               posts.created,
               posts.status,
               categories.name catename,
               users.nickname
               FROM
               posts
               INNER JOIN categories ON categories.id = posts.category_id
               INNER JOIN users ON users.id = posts.user_id
               WHERE 1 = 1 `
    if (query.category_id) {
        sql += ` AND posts.category_id = '${query.category_id}' `
    }
    if (query.status) {
        sql += ` AND posts.status = '${query.status}' `
    }
    sql += ` ORDER BY created DESC
             LIMIT ${(query.pageNum - 1) * query.pageSize}, ${query.pageSize}`
    // console.log(query)
    connection.query(sql, (err, response) => {
        if (err) {
            callback(err)
        } else {
            sql = `SELECT COUNT(*) total FROM posts WHERE 1 = 1 `
            if (query.category_id) {
                sql += ` AND posts.category_id = '${query.category_id}' `
            }
            if (query.status) {
                sql += ` AND posts.status = '${query.status}' `
            }
            connection.query(sql, (err2, response2) => {
                if (err2) {
                    callback(err2)
                } else {
                    // console.log(response)
                    // console.log(response2)
                    callback(null, { list: response, total: response2[0].total })
                }
            })
        }
    })
}
exports.delPostsById = (obj, callback) => {
    // console.log(obj)
    connection.query('delete from posts where id=?', [obj.id], (err) => {
        if (err) {
            callback(err)
        } else {
            callback(null)
        }
    })
}