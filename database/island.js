const con = require('./index')
// 查找所有的信息
const island = {
    findAll(res) {
        let sql = 'SELECT * FROM island'
        con.query(sql, (error, result) => {
            res.send(result)
        })
    },
    async deleteItem(req,res){
        let item = req.body
        let sql = `DELETE FROM island WHERE id = ?`
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
        let sql = `UPDATE island SET name = ?,description= ? WHERE id= ?`
        con.query(sql,[item.name,item.description,item.id],(error,data)=>{
            if (error) {
                res.send('更新失败')
            } else {
                res.send('更新成功')
            }
        })
    },
    async insertItem(req, res) {
        let item = req.body
        let sql = `INSERT INTO island (name,description) VALUES (?,?)`
        con.query(sql,[item.name,item.description], (err, result) => {
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
module.exports = island