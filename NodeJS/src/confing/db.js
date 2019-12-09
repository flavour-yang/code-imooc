const env = process.env.NODE_ENV  //在package中配置

let MYSQL_CONFIG = {
    host: 'localhost', //域名
    user: 'root',
    password: '123456',
    port: '3306', // 默认端口
    database: 'myblog'
}
//配置
if (env === 'dev') {
    MYSQL_CONFIG = {
        host: 'localhost', //域名
        user: 'root',
        password: '123456',
        port: '3306', // 默认端口
        database: 'myblog'
    }
}
if (env === 'production') {
    MYSQL_CONFIG = {
        host: 'localhost', //域名
        user: 'root',
        password: '123456',
        port: '3306', // 默认端口
        database: 'myblog'
    }
}
module.exports = {
    MYSQL_CONFIG
}
