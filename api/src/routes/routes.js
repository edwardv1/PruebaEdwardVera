const { Router } = require('express');
const router = Router();
const { getDataProductsHandler } = require('../handlers/dataHandler');


router.get('/home', getDataProductsHandler);


module.exports = router;