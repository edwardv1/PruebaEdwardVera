const { getDataApi } = require('../controllers/dataController.js')


const getDataHandler = async (req, res) => {
    try {
        const allProducts = await getDataApi();
        return res.status(200).json(allProducts)
    } catch (error) {
        return res.status(400).send({error: error.message})
    }
}


module.exports = {
    getDataHandler
}