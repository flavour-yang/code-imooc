// const mysql = require('mysql')

// // 创建连接对象
// const connection = mysql.createConnection({
//     host: 'localhost', //域名
//     user: 'root',
//     password: '123456',
//     port: '3306', // 默认端口
//     database: 'myblog'
// })

// //开始连接
// connection.connect()
// // const sql = 'SELECT * FROM users';
// const sql = 'UPDATE users SET realname="李四2" WHERE username="lisi" AND id=6'
// connection.query(sql, (err, result) => {
//     if (err) {
//         console.log(err)
//         return
//     } else {
//         console.log(result)
//     }
// })
// connection.end()