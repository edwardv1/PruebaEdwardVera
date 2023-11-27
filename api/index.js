const server = require('./app.js');
const { conn } = require('./db.js');
require("dotenv").config();
const { PORT } = process.env;

conn.sync({ force: false }).then(() => {
    server.listen(PORT, () => {
        console.log('listening at %s', PORT); 
    });
});