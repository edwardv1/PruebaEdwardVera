require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT } = process.env;
const Product = require("./src/models/Product")

const sequelize = new Sequelize(
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
   {
      logging: false, 
      native: false, 
   }
);

//Ejecuto el modelo Product en la BD
Product(sequelize);

module.exports = {
   ...sequelize.models,
   conn: sequelize, 
};