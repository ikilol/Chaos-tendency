var express = require('express');

var app = express();
var server = app.listen(3000);

app.use(express.static('public'));

console.log("server running");

var socket = require('socket.io');

var io = socket(server);

io.sockets.on('connection', newConnection);

function newConnection(socket){
    console.log('newConnection '+ socket.id);

    socket.on('mouse', mouseMsg);

    function mouseMsg(data) {
        socket.broadcast.emit('mouse', data)
        console.log(data);
    }
}

const fs = require('fs');
const dir = 'Audio';

fs.readdir(dir, (err, files) => {
  console.log(files.length);
});

