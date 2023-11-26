const { getAllProducts, createProduct, deleteProduct, updateProduct } = require('../controllers/dataController.js')

// Función manejadora que obtiene y retorna todos los prodcutos (de la API y DB)
const getProductsHandler = async (req, res) => {
    try {
        const allProducts = await getAllProducts();
        return res.status(200).json(allProducts)
    } catch (error) {
        return res.status(400).send({error: error.message})
    }
}

// Función manejadora para crear y guardar productos en la DB
const createProductHandler = async (req,res) => {  
    const { title, price, description, category, image, rating } = req.body;
   
    if(!title || !price || !description || !category || !image || !rating) return res.status(400).send("Mandatory data is missing.")
    try {
        const messageCreated = await createProduct(title, price, description, category, image, rating)
        return res.status(200).send(messageCreated)
   } catch (error) {
        return res.status(400).json({error: error.message}) 
   }
}

// Función manejadora para actualizar productos de la DB
const updateProductHandler = async (req,res) => { 
    const {id} = req.params;
    const { title, price, description, category, image, rating } = req.body;

    if(!title || !price || !description || !category || !image || !rating) return res.status(400).send("Mandatory data is missing.")
   
    try {
        await updateProduct(id, title, price, description, category, image, rating)
        return res.status(200).send(`The product has been updated successfully`)
   } catch (error) {
        return res.status(400).json({error: error.message}) 
   }
}

// Función manejadora para eliminar productos de la DB
const deleteProductHandler = async (req,res) => {  
    const {id} = req.params;
    
    try {
        const productDeleted = await deleteProduct(id);
        return res.status(200).send(`The product ${productDeleted.title} has been deleted successfully`)
   } catch (error) {
        return res.status(400).json({error: error.message}) 
   }
}

module.exports = {
    getProductsHandler, 
    createProductHandler,
    deleteProductHandler,
    updateProductHandler
}