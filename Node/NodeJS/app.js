const querystring = require("querystring");
const blogRouter = require("./src/router/blog"); //common js
const userRouter = require("./src/router/user");
const { getVal, setVal } = require("./src/db/redis");
const SESSION_DATA = {};

const getCookieExpires = () => {
  // 获取cookie 过期时间
  const d = new Date();
  d.setTime(d.getTime() + 24 * 60 * 60 * 1000);
  return d.toGMTString();
};
const getPostData = (req) => {
  return new Promise((resolve, reject) => {
    if (req.method !== "POST") {
      //非post请求
      resolve({});
      return;
    }
    if (req.headers["content-type"] !== "application/json") {
      //json格式
      resolve({});
      return;
    }
    let postData = "";
    req.on("data", (chunk) => {
      postData += chunk.toString();
    });
    req.on("end", () => {
      if (!postData) {
        resolve({});
        return;
      }
      resolve(JSON.parse(postData));
    });
  });
};

const serverHandle = (req, res) => {
 
  res.setHeader("content-type", "application/json");

  
  //解析url
  const url = req.url;
  req.path = url.split("?")[0];
  //解析query
  req.query = querystring.parse(url.split("?")[1]);
  // 解析cookie
  req.cookie = {};
  const cookieStr = req.headers.cookie || "";
  cookieStr.split(";").forEach((el) => {
    if (!el) {
      return;
    }
    const arr = el.split("=");
    const key = arr[0].trim();
    const val = arr[1].trim();
    req.cookie[key] = val;
  });

  // 解析session
  let needSetCookie = false;
  let userId = req.cookie.userId;
  // if (userId) {
  //     if (!SESSION_DATA[userId]) {
  //         SESSION_DATA[userId] = {}
  //     }
  //     req.session = SESSION_DATA[userId]
  // } else {
  //     needSetCookie = true;
  //     userId = `${Date.now()}_${Math.random()}`
  //     SESSION_DATA[userId] = {}
  // }
  // req.session = SESSION_DATA[userId]

  if (!userId) {
    needSetCookie = true;
    userId = `${Date.now()}_${Math.random()}`;
    setVal(userId, {});
  }
  req.sessionId = userId;
  getVal(req.sessionId)
    .then((sessionData) => {
      console.log("sessionData", sessionData);
      if (sessionData == null) {
        // 初始化redis 中的session值
        setVal(req.sessionId, {});
        // 设置 session
        req.session = {};
      } else {
        // 设置 session
        req.session = sessionData;
      }
      console.log("getVal req.session", req.session);

      return getPostData(req);
    })
    .then((postData) => {
      req.body = postData;
      //处理blog路由
      const blogResult = blogRouter(req, res);
      if (blogResult) {
        blogResult.then((blogData) => {
          if (needSetCookie) {
            res.setHeader(
              "Set-Cookie",
              `userId=${userId}; path=/; httpOnly; expires=${getCookieExpires()}`
            );
          }
          res.end(JSON.stringify(blogData));
        });
        return;
      }
      const userResult = userRouter(req, res);
      if (userResult) {
        userResult.then((userData) => {
          if (needSetCookie) {
            res.setHeader(
              "Set-Cookie",
              `userId=${userId}; path=/; httpOnly; expires=${getCookieExpires()}`
            );
          }
          res.end(JSON.stringify(userData));
        });
        return;
      }

      // 页面访问到其他路径时 404
      res.writeHead(404, { "content-type": "text/plain" });
      res.write("404 Not Found");
      res.end();
    });
};
module.exports = serverHandle;
