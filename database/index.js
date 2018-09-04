const mysql = require('mysql')
const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'19940711Miao.',
    database:'express'
})
module.exports = connection