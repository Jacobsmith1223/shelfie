const getInventory = (req,res) => {
    const db = req.app.get('db');
    db.get_inventory().then((product) => {
        res.status(200).send(product)
    });
    
}

const createProduct = (req,res) => {
    const {img,name,price} = req.body
    const db = req.app.get('db');
    db.create_product([img,name,price]).then(() => {
        res.status(200).send('product upload complete')
    })
    
}

module.exports = {
    getInventory,
    createProduct
}