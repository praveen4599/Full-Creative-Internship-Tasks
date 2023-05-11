const WebSocketServerPort = 8000;
const WebSocketServer = require('websocket').server;
const { request } = require('express');
const http = require('http');

// Spinning the http server and websocket server
const server = http.createServer(); // Creating a Server
server.listen(WebSocketServerPort); // using listen method to listen on port : 8000
console.log('listening on port 8000'); 

const wsServer = new WebSocketServer({
    httpServer: server
});

const clients = {}; // create a client object

const getUniqueID = () => {
    const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    return s4() + s4() + '-' + s4();
};

wsServer.on('request', function(request){
    var userID = getUniqueID();
    console.log((new Date()) + ' Recieved a new connection from origin ' + request.origin + '.');


    // accept the request
    const connection = request.accept(null, request.origin);
    clients[userID] = connection; // using the key as the userID
    console.log("connected" + userID + ' in ' + Object.getOwnPropertyNames(clients));

    connection.on('message', function(message){

        if(message.type === 'utf8'){
            console.log("Recieved Message: ", message.utf8Data);

            // broadcasting message to all connected clients
            for(key in clients){
                clients[key].sendUTF(message.utf8Data);
                console.log('sent Message to: ', clients[key]);
            }
        }
    })
});


