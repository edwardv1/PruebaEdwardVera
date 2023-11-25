const axios = require('axios');
const {Product} = require('../../db.js');

// Función para obtener productos de la API externa
const getDataApi = async () => {
    try {
        const infoApi = (await axios.get("https://fakestoreapi.com/products")).data;
        return infoApi; 
    } catch (error) {
        throw new Error(error.message);
    }
}

// Función para obtener productos de la DB
const getDataDb = async () => {
    try {
        const allProductsDb = await Product.findAll();

        return allProductsDb;   
    } catch (error) {
        throw new Error(error.message)
    }   
};

// Función que obtiene y retorna todos los prodcutos (de la API y DB)
const getAllProducts = async(name) => {
    try {
        let productsApi = await getDataApi();
        let productsDb = await getDataDb();
        let allProducts = [...productsApi, ...productsDb];
         
        return allProducts;  
    } catch (error) {
        throw new Error(error.message);
    }
}

// Función para crear y guardar productos en la DB
const createProduct = async (title, price, description, category, image, rating) => {
    try {
        const [productDb, created] =  await Product.findOrCreate({
           where: { title },
           defaults: { title, price, description, category, image, rating }
        });
        
        if(!created) throw new Error("The product you are trying to create already exists.")

   } catch (error) {
        throw new Error(error.message);
   }
}

// Función para actualizar productos de la DB
const updateProduct = async (id, title, price, description, category, image, rating) => {
    try {
        const productUpdated =  await Product.update(
           { title, price, description, category, image, rating },
           { where: { id }}
        );
        
        if(!productUpdated) throw new Error("The product you are trying to update doesnt exists.")

   } catch (error) {
        throw new Error(error.message);
   }
}

// Función para eliminar productos de la DB
const deleteProduct = async(id) => {
    try {
        const productDeleted = await Product.findByPk(id);
        if(productDeleted) {
            await Product.destroy({where: {id}});
            return productDeleted;
        }
        throw new Error(`The product doesnt exists`);
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = {
    getAllProducts, createProduct, updateProduct, deleteProduct
}