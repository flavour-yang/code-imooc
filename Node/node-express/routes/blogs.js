var express = require("express");
var router = express.Router();
const { SuccessModel, ErrorModel } = require("../model/resModel");
const {
  getList,
  newBlog,
  updateBlog,
  deleteBlog,
  getDetails,
} = require("../controller/blog");

const loginCheck = (req) => {
  if (!req.session.username) {
    return Promise.resolve(new ErrorModel("尚未登陆!"));
  }
};
router.get("/list", (req, res, next) => {
  let author = req.query.author || "";
  const keyword = req.query.keyword || "";
  if (req.query.isadmin) {
    const loginResult = loginCheck(req);
    if (loginResult) {
      return loginResult;
    }
    author = req.session.username;
  }
  return getList(author, keyword).then((result) => {
    res.json({
      message: 0,
      data: result,
    });
    // next();
  });
  
});

module.exports = router;
