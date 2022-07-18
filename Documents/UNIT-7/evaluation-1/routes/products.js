
const express = require("express");
const productRouter = express.Router();
const products = require("../products.json");

const uuid = require("uuid");



//get all products
productRouter.get("/products", (req, res) => {
  res.status(200).send(products);
  
});

//create product

productRouter.post("/products/create", (req, res) => {

  const newProduct = {
    id:uuid.v4(),
    name:req.body.name,
    category:req.body.category,
    price:req.body.price,
    brand:req.body.brand

  }

  products.products.push(newProduct)
  res.status(200).send(products)


});


//update product

productRouter.put("/products/:productId" , (req,res) => {
    
  const found = products.products.some(product => product.id  === parseInt(req.params.productId))

  if(found){
    const updProduct = req.body
    products.products.forEach(product => {
      if(product.id === parseInt(req.params.productId)){
        product.name = updProduct.name ?  updProduct.name :  product.name
        product.price =  updProduct.price ?  updProduct.price : product.price
        product.category = updProduct.category ?  updProduct.category : product.category
        product.brand =  updProduct.brand ? updProduct.brand :  product.brand
     
        res.json({msg:"Product updated", product})

      }
    })
  }
  else{
    res.status(400).json({msg:`No product with id of ${req.params.productId}`})
  }
})

//delete product

productRouter.delete("/products/:productId", (req,res) => {
  const found = products.products.some(product => product.id === parseInt(req.params.productId))

  if (found){
     res.send({
       msg: "product deleted",
       product: products.products.filter(product => product.id !== parseInt(req.params.productId))
     })
  }
  else{
    res.status(400).json({msg: `No product with the id of ${req.params.productId} `})
  }
})


module.exports = productRouter;