require('dotenv').config()
const express = require('express')
const cors = require('cors')
const massive = require('massive')

const productCTRL = require('./controller')

const {CONNECTION_STRING} = process.env

const app = express()

app.use(express.json())
app.use(cors())


massive(CONNECTION_STRING).then(dbInstance => {
    app.set('db',dbInstance)
    console.log('IT LIIIIVES')
})


app.get('/api/inventory',productCTRL.getInventory)

app.post('/api/product', productCTRL.createProduct)


app.listen(8080, () => console.log('ready to serve, your majesty'))