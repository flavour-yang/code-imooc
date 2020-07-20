const { SuccessModel, ErrorModel } = require("../model/resModel");
const {
  getList,
  newBlog,
  updateBlog,
  deleteBlog,
  getDetails,
} = require("../controller/blog");

const loginCheck = (req) => {
  if (req.session.username) {
    return Promise.resolve(new ErrorModel("尚未登陆!"));
  }
};
const handleBlogRouter = (req, res) => {
  const method = req.method;
  // const url = req.url
  // const path = url.split('?')[0]
  const id = req.query.id;

  // 获取博客列表
  if (method === "GET" && req.path === "/api/blog/list") {
    const author = req.query.author || "";
    const keyword = req.query.keyword || "";

    return getList(author, keyword).then((reslut) => {
      return new SuccessModel(reslut);
    });
  }
  //博客详情
  if (method === "GET" && req.path === "/api/blog/details") {
    const id = req.query.id || "";
    return getDetails(id).then((reslut) => {
      return new SuccessModel(reslut[0]);
    });
  }
  // 添加博客
  if (method === "POST" && req.path === "/api/blog/new") {
    const blogReslut = newBlog(req.body);
    return blogReslut.then((reslut) => {
      return new SuccessModel(reslut);
    });
  }
  //更新博客
  if (method === "POST" && req.path === "/api/blog/update") {
    if (loginCheck(req)) {
      return loginCheck;
    }
    const blogReslut = updateBlog(id, req.body);

    return blogReslut.then((reslut) => {
      return new SuccessModel(reslut);
    });
    // if (reslut) {
    //     return new SuccessModel()
    // } else {
    //     return new ErrorModel("更新博客失败!")
    // }
  }
  //删除博客
  if (method === "POST" && req.path === "/api/blog/del") {
    if (loginCheck(req)) {
      return loginCheck;
    }
    const author = req.session.username;
    const blogReslut = deleteBlog(id, author);
    if (blogReslut) {
      return blogReslut.then((res) => {
        return new SuccessModel(res);
      });
    } else {
      return new ErrorModel("删除博客失败!");
    }

    // if (reslut) {
    //     return new SuccessModel()
    // } else {
    //     return new ErrorModel("删除博客失败!")
    // }
  }
};
module.exports = handleBlogRouter;
