



const fs = require("fs")
const path = require("path")
// Promise 读取文件
// function getFile(fileName) {
//     return new Promise((resolve, reject) => {
//         const fillFilename = path.resolve(__dirname, '../file', fileName)
//         fs.readFile(fillFilename, (err, data) => {
//             if (err) {
//                 reject({ err: '读取错误!' })
//             }
//             resolve(JSON.parse(data))
//         })

//     })
// }

// getFile('a.json').then(res => {
//     console.log(res)
//     return getFile(res.next)
// }).then(res => {
//     console.log(res)
//     return getFile(res.next)
// }).then(res => {
//     console.log(res)
// })

//回调函数的方式读取文件
// function getFile(fileName, callback) {
//     const fillFilename = path.resolve(__dirname, '../file', fileName)
//     fs.readFile(fillFilename, (err, data) => {
//         if (err) {
//             console.log(err)
//         }
//         callback(JSON.parse(data))
//     })
// }
// getFile('a.json', aData => {
//     console.log(aData)
//     getFile(aData.next, bData => {
//         console.log(bData)
//         getFile(bData.next, cData => {
//             console.log(cData)
//         })
//     })
// })