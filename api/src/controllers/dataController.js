const axios = require('axios');

const getDataApi = async () => {
    try {
        const infoApi = (await axios.get("https://fakestoreapi.com/products")).data;
        return infoApi; 
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = {
    getDataApi,
}