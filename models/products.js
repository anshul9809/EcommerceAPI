const mongoose = require('mongoose');

// creating the product schema
const productSchema = new mongoose.Schema({
    name: String,
    quantity: Number
},{
    versionKey: false
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;