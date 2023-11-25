const { Router } = require('express');
const router = Router();
const { getProductsHandler, createProductHandler, deleteProductHandler, updateProductHandler } = require('../handlers/dataHandler');


router.get('/', getProductsHandler);
router.post('/create', createProductHandler);
router.delete('/:id', deleteProductHandler);
router.put('/:id', updateProductHandler);



module.exports = router;