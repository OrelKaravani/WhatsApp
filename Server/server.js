const http = require('http');
const express = require('express');
const app = express();

const server = http.createServer(app).listen(5000);

const io = require('socket.io').listen(server);


io.on('connection', socket=>{
    console.log("New client connected to server!");


    socket.on('disconnect', socket=>{
        console.log("Client was disconnected from the server");
    })
});