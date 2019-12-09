const { exec } = require('../db/mysql')
const getList = (author, keyword) => {
    let sql = 'select * from blogs where 1=1 '  // 1=1 特殊处当条件不存在时不会报错
    if (author) {
        sql += `and author="${author}"`
    }
    console.log(sql)
    if (keyword) {
        sql += `and content like "%${keyword}%"`
    }
    return exec(sql)

}
const newBlog = (blog = {}) => {
    let sql = `insert into blogs (title, content, createtime, author) VALUES ("${blog.title}", "${blog.content}", "${blog.createtime}" ,"${blog.author}");`
    return exec(sql)
}

const updateBlog = (id, data = {}) => {
    let sql = `update blogs set title = "${data.title}",content = "${data.content}"  where id="${id}"`
    console.log('更新博客', sql, id, data)
    return exec(sql)
}
const deleteBlog = (id) => {
    let sql = `delete from blogs where id="${id}"`
    console.log('删除博客', id)
    return exec(sql)
}
module.exports = {
    getList,
    newBlog,
    updateBlog,
    deleteBlog
}