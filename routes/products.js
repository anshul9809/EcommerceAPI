const express = require('express');
const router = express.Router();

const productsController = require('../controllers/products');

//route to get all the products
router.get('/', productsController.products);

router.post('/create', productsController.create);

router.delete('/:productID', productsController.delete);

router.post('/:productID/update_quantity/', productsController.updateQuantity);

module.exports = router;