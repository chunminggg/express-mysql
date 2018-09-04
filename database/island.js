const con = require('./index')
// 查找所有的信息
const island = {
    findAll(res) {
        let sql = 'SELECT * FROM island'
        con.query(sql, (error, result) => {
            res.send(result)
        })
    },
    async updateItem(req,res){
        let item = req.body
        let sql = `UPDATE island SET name ="${item.name}",description="${item.description} ,WHERE id= ${parseInt(item.id)}"`
        con.query(sql,(error,data)=>{
            if (error) {
                res.send('更新失败')
            } else {
                res.send('更新成功')
            }
        })
    },
    async insertItem(req, res) {
        let item = req.body
        let sql = `INSERT INTO island (name,description) VALUES ("${item.name}","${item.description}")`
        let findSql = 'SELECT name FROM island'
        con.query(findSql, (error, data) => {
            let isExist = false
            data.forEach(obj => {
                if (obj.name == item.name) {
                    isExist = true
                }
            });
            if (isExist) {
                res.send('已有该数据')
            } else {
                con.query(sql, (err, result) => {
                    if (err) {
                        res.send('保存失败')
                    } else {
                        res.send('保存成功')
                    }
                })
            }
        })

    }
}
module.exports = island