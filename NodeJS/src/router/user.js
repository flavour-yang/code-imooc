const { login } = require('../controller/user')
const { SuccessModel, ErrorModel } = require('../model/resModel')

// 获取cookie 过期时间
const getCookieExpires = () =>{
    const d= new Date()
    d.setTime(d.getTime() + (24 * 60 * 60 * 1000))
    return d.toGMTString()
}
const handleUserRouter = (req, res) => {
    const method = req.method
    if (method === 'GET' && req.path === "/user/login") {
        const { username, password } = req.query
        // const { username, password } = req.body
        const userReslut = login(
            username,
            password
        )
        if (username && password) {
            return userReslut.then(reslut => {
                if (reslut.length > 0) {
                    // 设置cookie
                    res.setHeader('Set-Cookie', `username=${reslut[0].username.trim()}; path=/; httpOnly; expires=${getCookieExpires()}`) //path 为根路径, httpOnly 只允许后端改cookie, expires 设置 cookie过期时间
                    return new SuccessModel()
                } else {
                    return new ErrorModel('登陆失败')
                }
            }).catch(() => {
                return new ErrorModel('登陆失败')
            })
        } else {
            return new ErrorModel('登陆失败')
        }
    }
    if (method === 'GET' && req.path === "/user/login-test") {
        if (req.cookie.username) {
            return Promise.resolve({
                username: req.cookie.username
            })
        }
        return Promise.resolve('未登录!')

    }
}

module.exports = handleUserRouter