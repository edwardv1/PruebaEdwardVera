const server = require('./app.js');
const PORT = 3001;
const { conn } = require('./db.js');

conn.sync({ force: false }).then(() => {
    server.listen(PORT, () => {
        console.log('listening at %s', PORT); 
    });
});