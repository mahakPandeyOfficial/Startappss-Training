const http = require("http");
const requestHandler = require("./handler");

const server = http.createServer();

const PORT = 8000;
server.listen(PORT, ()=> {

  console.log(`Server running at http://localhost:${PORT}`);

})