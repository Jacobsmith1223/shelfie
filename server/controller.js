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

let updateProduct = (req,res) => {
    const {id} = req.params;
    const name = req.body;
    const price = req.body;
    const img = req.body;
    const db = req.app.get('db');
    db.update_product([id,name,price,img]).then(() => {
    res.status(200).send('product has been updated your majesty')
    })
    
}

const deleteProduct = (req,res) => {
    const {id} = req.params
    const db = req.app.get('db');
    db.delete_product([id]).then(() => {
        res.status(200).send("product is gone")
    })
}

module.exports = {
    getInventory,
    createProduct,
    updateProduct,
    deleteProduct
}