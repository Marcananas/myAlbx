const connection = require('./commonMod')
// 从数据库获取文章分类目录所有数据
exports.getAllCate = (callback) => {
    connection.query('SELECT * FROM categories', (err, response) => {
        if (err) {
            callback(err)
        } else {
            callback(null, response)
        }
    })
}
// 根据id提交修改数据到数据库
exports.eidtById = (obj, callback) => {
    connection.query('UPDATE categories SET slug = ?, name = ? WHERE id = ?', [obj.slug, obj.name, obj.id], (err) => {
        if (err) {
            callback(err)
        } else {
            callback(null)
        }
    })
}
// 添加数据到数据库
exports.add = (obj, callback) => {
    connection.query('INSERT categories VALUE(null,?,?)', [obj.slug, obj.name], (err) => {
        if (err) {
            callback(err)
        } else {
            callback(null)
        }
    })
}
// 根据id删除数据库
exports.del = (obj, callback) => {
    connection.query('delete from categories where id=?', [obj.id], (err) => {
        if (err) {
            callback(err)
        } else {
            callback(null)
        }
    })
}