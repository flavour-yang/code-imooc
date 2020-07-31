
const mysql = require('mysql')
const { MYSQL_CONFIG } = require('../conf/index')

const con = mysql.createConnection(MYSQL_CONFIG)

function exec(sql) {
    return new Promise((resolve, reject) => {
        con.query(sql, (err, result) => {
            if (err) {
                console.log(err)
                reject(err)
                return
            }
            console.log(result)
            resolve(result)
        })
    })

}

module.exports = {
    exec
}