const { Router } = require('express');
const router = Router();
const { getProductsHandler, createProductHandler, deleteProductHandler, updateProductHandler } = require('../handlers/dataHandler');


router.get('/products', getProductsHandler);
router.post('/create', createProductHandler);
router.delete('/:id', deleteProductHandler);
router.put('/update', updateProductHandler);



module.exports = router;