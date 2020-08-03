var express = require("express");
var router = express.Router();
var { register, solePass } = require("../controller/user.js");
var { SuccessModel, ErrorModel } = require("../model/resModel");
/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/register", function (req, res, next) {
  const { username, password } = req.body;
  return solePass(username).then((soleRes) => {
    if (soleRes.length) {
      res.json(new ErrorModel("用户名已存在!"));
    } else {
      return register(username, password).then((result) => {
        res.json(
          new SuccessModel({ id: result.insertId, message: result.message })
        );
      });
    }
  });
});

module.exports = router;
