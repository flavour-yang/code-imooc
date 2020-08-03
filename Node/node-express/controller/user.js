const { exec } = require("../db/mysql");
const login = (username, password) => {
  let sql = `select username,password,realname from users where username='${username}' and password='${password}'`;
  return exec(sql);
};
const register = (username, password) => {
  let sql = `INSERT INTO users (username, password) VALUES ('${username}', '${password}')`;
  return exec(sql);
};
const solePass = (username)=>{
    let sql = `select username from users where username='${username}'`;
    return exec(sql);
}
module.exports = {
  login,
  register,
  solePass
};
