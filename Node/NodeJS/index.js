const http = require('http')
const querystring = require('querystring')
const prot = 8890
const server = http.createServer((req, res) => {  //request请求  , response 响应
    console.log('method: ', req.method)
    const method = req.method  //获取
    const url = req.url //获取路由 
    const path = url.split('?')[0]
    const query = querystring.parse(url.split('?')[1])

    res.setHeader('Content-type', 'application/json') //设置数据格式
    const resData = {
        method,
        url,
        path,
        query
    }
    if (method === 'GET') {
        res.end(JSON.stringify(resData))
    }
    if (method === 'POST') {
        let postData = ''

        req.on('data', chunk => {
            postData += chunk.toString() //将数据转换成JSON
        })
        req.on('end', () => {
            resData.postData = postData
            res.end(JSON.stringify(resData))
        })
    }
    // console.log('query', req.query)
    // res.end(JSON.stringify(req.query))
})

server.listen(prot);
console.log('listen: ' + prot)
