const { SuccessModel, ErrorModel } = require('../model/resModel')
const { getList, newBlog, updateBlog, deleteBlog } = require('../controller/blog')
const handleBlogRouter = (req, res) => {
    const method = req.method
    // const url = req.url
    // const path = url.split('?')[0]
    const id = req.query.id
    // 获取博客列表
    if (method === "GET" && req.path === '/api/blog/list') {
        const author = req.query.author || ''
        const keyword = req.query.keyword || ''

        return getList(author, keyword).then(reslut => {
            return new SuccessModel(reslut)
        })

    }
    //博客详情
    if (method === "GET" && req.path === '/api/blog/details') {
        return {
            msg: '获取博客详情'
        }
    }
    // 添加博客
    if (method === 'POST' && req.path === '/api/blog/new') {
        const blogReslut = newBlog(req.body)
        return blogReslut.then(reslut => {
            return new SuccessModel(reslut)
        })
    }
    //更新博客
    if (method === 'POST' && req.path === '/api/blog/update') {
        const blogReslut = updateBlog(id, req.body)
        return blogReslut.then(reslut => {
            return new SuccessModel(reslut)
        })
        // if (reslut) {
        //     return new SuccessModel()
        // } else {
        //     return new ErrorModel("更新博客失败!")
        // }
    }
    //删除博客
    if (method === 'POST' && req.path === '/api/blog/del') {
        const blogReslut = deleteBlog(id)
        if (blogReslut) {
            return blogReslut.then(res => {
                return new SuccessModel(res)
            })
        } else {
            return new ErrorModel("删除博客失败!")
        }

        // if (reslut) {
        //     return new SuccessModel()
        // } else {
        //     return new ErrorModel("删除博客失败!")
        // }
    }
}
module.exports = handleBlogRouter