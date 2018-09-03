const con = require('./index')
// 查找所有的信息
 const island = {
      findAll(res){
         let sql = 'SELECT * FROM island'
         con.query(sql,(error,result)=>{
             res.send(result)
         })
     },
     async insertItem(item){
         let sql = `INSERT INTO island (name,description) VALUES (${item.name},${item.description})`
         let data = await con.query(sql)
         return data
     }
 }
 module.exports = island