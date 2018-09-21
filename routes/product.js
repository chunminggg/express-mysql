var express = require('express');
var router = express.Router();
var product = require('../database/product')

router.get('/product', (req, res, next) => {
    product.findAll(res)
})
router.post('/product', (req,res,next)=>{
  product.insertItem(req,res)
})
router.post('/product/fetch', (req,res,next)=>{
  product.fectchItem(req,res)
})
router.put('/product',(req,res,next)=>{
  product.updateItem(req,res)
})
router.delete('/product',(req,res,next)=>{
  product.deleteItem(req,res)
})
module.exports = router;
