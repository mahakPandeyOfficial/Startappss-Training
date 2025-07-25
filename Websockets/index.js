const http = require('http');
const path = require('path');
const express = require('express');
const { log } = require('console');
const { Socket } = require('socket.io');

const server = http.createServer(app);
const app = express();
//app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));
const io = new Socket(server);

// io stands for Input/Output, and it is used for real-time communication between the server and clients.
// Handling Socket.io connections 
io.on('connection', (socket)  => {
  
}))


app.get('/', (req, res) => {
    return res.sendFile("./public/index.html");
})


server.listen(9000, () => {
    console.log('Server is running on port 9000');
    
})