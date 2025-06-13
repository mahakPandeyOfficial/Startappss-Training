const http = require('http');
const syntax = require ('./syntax');

const server = http.createServer((req, res) => {
    console.log('req');
});

const PORT = 8000;
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});