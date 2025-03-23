const http = require('http')
const index = require('./index')
const {initializeSocket} = require('');

const PORT = process.env.PORT || 3000;

const server = http.createServer(index);

initializeSocket();

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});