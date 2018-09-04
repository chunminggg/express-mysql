var express = require('express');
var router = express.Router();
var island = require('../database/island')
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/island', (req, res, next) => {
    island.findAll(res)
})
router.post('/island', (req,res,next)=>{
  island.insertItem(req,res)
})
router.put('/island',(req,res,next)=>{
  island.updateItem(req,res)
})
module.exports = router;
