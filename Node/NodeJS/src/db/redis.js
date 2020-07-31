const redis = require('redis');
const REDIS_CONFIG = require('../confing/db')

// 创建客户端
const redisClient = redis.createClient(REDIS_CONFIG.port, REDIS_CONFIG.host)

redisClient.on('error', err => {
    console.log(err)
})

function setVal(key, val) {
    if (typeof val === 'object') {
        val = JSON.stringify(val)
    }
    redisClient.set(key, val, redis.print)
}

function getVal(key) {
    return new Promise((resolve, reject) => {
        redisClient.get(key, (err, val) => {
            if (err) {
                reject(err)
                return
            }
            if (val == null) {
                resolve(null)
                return
            }
            try {//对上面stringify转换
                resolve(JSON.parse(val))
            } catch (ex) {
                resolve(val)
            }

        })
    })
    // redisClient.get(key)

}

module.exports = {
    setVal,
    getVal
}