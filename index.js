const express = require ('express')
const productRouter = require('./routes/products')

const app = express()

app.use(express.json())

app.use(productRouter)




app.listen(3000, ()=> {
    console.log("server is running at http://localhost:3000")
})


