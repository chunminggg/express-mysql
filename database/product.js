const con = require('./index')
// 查找所有的信息
const product = {
    findAll(res) {
        let sql = 'SELECT * FROM product'
        con.query(sql, (error, result) => {
            res.send(result)
        })
    },
    async fectchItem(req,res){
        let sql = 'select * from product join island on product.`islandId`=island.`id`'
        con.query(sql,(err,data)=> {
            res.send(data)
        })
    },
    async deleteItem(req,res){
        let item = req.body
        let sql = `DELETE FROM product WHERE id = ?`
        con.query(sql,[item.id],(err,data)=> {
            if (err) {
                res.send('删除失败')
            } else {
                res.send('删除成功')
            }
        })
    },
    async updateItem(req,res){
        let item = req.body
        let sql = `UPDATE product SET name = ?,description= ?,islandId= ? WHERE id= ?`
        con.query(sql,[item.name,item.description,item.islandId,item.id],(error,data)=>{
            if (error) {
                res.send('更新失败')
            } else {
                res.send('更新成功')
            }
        })
    },
    async insertItem(req, res) {
        let item = req.body
        let sql = `INSERT INTO product (name,description,islandId) VALUES (?,?,?)`
        con.query(sql,[item.name,item.description,item.islandId], (err, result) => {
            console.log(err)
            if (err) {
                res.send('保存失败')
                throw err
            } else {
                res.send('保存成功')
            }
        })

    }
}
module.exports = product