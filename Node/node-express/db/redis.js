const redis = require('redis');
const REDIS_CONFIG = require('../conf/index')

// 创建客户端
const redisClient = redis.createClient(REDIS_CONFIG.port, REDIS_CONFIG.host)

module.exports = redisClient