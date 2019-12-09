const querystring = require('querystring')
const blogRouter = require("./src/router/blog") //common js
const userRouter = require("./src/router/user")

const getPostData = (req) => {
    return new Promise((resolve, reject) => {
        if (req.method !== 'POST') { //非post请求
            resolve({})
            return
        }
        if (req.headers['content-type'] !== 'application/json') { //json格式
            resolve({})
            return
        }
        let postData = ''
        req.on('data', chunk => {
            postData += chunk.toString()
        })
        req.on('end', () => {
            if (!postData) {
                resolve({})
                return
            }
            resolve(JSON.parse(postData))
        })
    })
}

const serverHandle = (req, res) => {
    res.setHeader("content-type", "application/json")
    //解析url
    const url = req.url
    req.path = url.split('?')[0]
    //解析query
    req.query = querystring.parse(url.split('?')[1])
    // 解析cookie
    req.cookie = {}
    const cookieStr = req.headers.cookie || "";
    cookieStr.split(';').forEach(el => {
        if (!el) {
            return
        }
        const arr = el.split('=')
        const key = arr[0].trim()
        const val = arr[1].trim()
        req.cookie[key] = val
    });
    getPostData(req).then(postData => {
        req.body = postData
        //处理blog路由
        const blogReslut = blogRouter(req, res)
        if (blogReslut) {
            blogReslut.then(blogData => {
                res.end(
                    JSON.stringify(blogData)
                )
            })
            return
        }
        const userReslut = userRouter(req, res)
        if (userReslut) {
            userReslut.then(userData => {
                res.end(
                    JSON.stringify(userData)
                )
            })
            return
        }

        // 页面访问到其他路径时 404
        res.writeHead(404, { "content-type": "text/plain" })
        res.write('404 Not Found');
        res.end()

    })

}
module.exports = serverHandle