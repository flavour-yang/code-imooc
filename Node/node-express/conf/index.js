const env = process.env.NODE_ENV  //在package中配置

let MYSQL_CONFIG = {
    host: 'localhost', //域名
    user: 'root',
    password: '123456',
    port: '3306', // 默认端口
    database: 'myblog'
}

let REDIS_CONFIG = {
    prot: 6379,
    host: '127.0.0.1'
}
//配置
if (env === 'dev') {
    MYSQL_CONFIG = {
        host: 'localhost', //域名
        user: 'root',
        password: '123456',
        port: '3306', // 默认端口
        database: 'myblog'
    };
    REDIS_CONFIG = {
        prot: 6379,
        host: '127.0.0.1'
    }
}
if (env === 'production') {
    MYSQL_CONFIG = {
        host: 'localhost', //域名
        user: 'root',
        password: '123456',
        port: '3306', // 默认端口
        database: 'myblog'
    };
    REDIS_CONFIG = {
        prot: 6379,
        host: '127.0.0.1'
    }
}
module.exports = {
    MYSQL_CONFIG,
    REDIS_CONFIG
}
