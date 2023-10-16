const Product = require('../../../models/products');

//show all the products
exports.products = async function(req, res) {
    try {
        const foundProducts = await Product.find({});
        res.send(foundProducts);
    } catch (err) {
        res.status(500).send(err);
    }
};

//create a new product
exports.create = async (req, res) => {
    try {
        const { name, quantity } = req.body;
        const newProduct = new Product({ name, quantity });
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};


//delete a product using its ID
exports.delete = async function(req, res) {
    try {
        await Product.deleteOne({ _id: req.params.productID }).exec();
        res.send({ message: "Product deleted" });
    } catch (err) {
        res.status(500).send(err);
    }
};


//update a product's quantity
exports.updateQuantity = async function(req, res) {
    try {
        const ID = req.params.productID;
        const found = await Product.findById(ID);
        const newQuantity = parseInt(found.quantity) + parseInt(req.query.number);
        const updatedProduct = await Product.findByIdAndUpdate(ID, { quantity: newQuantity });
        updatedProduct.quantity = newQuantity;
        res.send({
            product: updatedProduct,
            message: 'Updated successfully'
        });
    } catch (err) {
        res.send(err);
    }
}