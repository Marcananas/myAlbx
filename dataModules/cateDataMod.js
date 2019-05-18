const connection = require('./commonMod')
// 从数据库获取文章分类目录所有数据
exports.getAllCate = (callback) => {
    connection.query('SELECT * FROM categories WHERE id != 1', (err, response) => {
        if (err) {
            callback(err)
        } else {
            callback(null, response)
        }
    })
}
exports.eidtById = (obj, callback) => {
    connection.query('UPDATE categories SET slug = ?, name = ? WHERE id = ?', [obj.slug, obj.name, obj.id], (err) => {
        if (err) {
            callback(err)
        } else {
            callback(null)
        }
    })
}
exports.add = (obj, callback) => {
    connection.query('INSERT categories VALUE(null,?,?)', [obj.slug, obj.name], (err) => {
        if (err) {
            callback(err)
        } else {
            callback(null)
        }
    })
}