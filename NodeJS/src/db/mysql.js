
const mysql = require('mysql')
const { MYSQL_CONFIG } = require('../confing/db')

const con = mysql.createConnection(MYSQL_CONFIG)

function exec(sql) {
    return new Promise((resolve, reject) => {
        con.query(sql, (err, reslut) => {
            if (err) {
                console.log(err)
                reject(err)
                return
            }
            console.log(reslut)
            resolve(reslut)
        })
    })

}

module.exports = {
    exec
}