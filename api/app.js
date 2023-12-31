const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const server = express();
const routes = require('./src/routes/routes.js');

server.name = 'API';

//Middlewares
server.use(express.json());
server.use(morgan('dev'));
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://prueba-edward-vera.vercel.app'); // 'http://localhost:5173' || https://prueba-edward-vera.vercel.app
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

server.use('/', routes);

// Error catching endware.
server.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
});

module.exports = server;