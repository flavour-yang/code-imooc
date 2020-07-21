const { login } = require('../controller/user')
const { SuccessModel, ErrorModel } = require('../model/resModel')
const { setVal } = require('../db/redis')

const handleUserRouter = (req, res) => {
    const method = req.method
    if (method === 'POST' && req.path === "/user/login") {
        // const { username, password } = req.query
        const { username, password } = req.body
        const userResult = login(
            username,
            password
        )
        if (username && password) {
            return userResult.then(result => {
                if (result.length > 0) {
                    req.session.username = result[0].username
                    req.session.realname = result[0].realname
                    setVal(req.sessionId, req.session)
                    console.log('req.session is', req.session.username)
                    // res.setHeader('Set-Cookie', `username=${result[0].username.trim()}; path=/; httpOnly; expires=${getCookieExpires()}`) //path 为根路径, httpOnly 只允许后端改cookie, expires 设置 cookie过期时间
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
    // if (method === 'GET' && req.path === "/user/login-test") {
    //     if (req.session.username) {
    //         return Promise.resolve({
    //             session: req.session
    //         })
    //     }
    //     return Promise.resolve('未登录!')

    // }
}

module.exports = handleUserRouter