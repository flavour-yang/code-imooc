const { exec } = require('../db/mysql')
const login = (username, password) => {
    let sql = `select username,password from users where username='${username}' and password='${password}'`
    return exec(sql)
    // if (username === 'admin' && password === '123456') {
    //     return true
    // } else {
    //     return false
    // }
}
module.exports = {
    login
}