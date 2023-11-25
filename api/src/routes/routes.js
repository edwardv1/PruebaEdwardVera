const { Router } = require('express');
const router = Router();
const { getDataHandler } = require('../handlers/dataHandler');


router.get('/home', getDataHandler);


module.exports = router;