/*
In the node.js intro tutorial (http://nodejs.org/), they show a basic tcp 
server, but for some reason omit a client connecting to it.  I added an 
example at the bottom.

Save the following server in example.js:
*/

import { createServer, Socket } from 'net';

var server = createServer(function(socket) {
	socket.write('Echo server\r\n');
	socket.pipe(socket);

    socket.on("data" ,  (data)=> {
        console.log(data);
    } )

});

try {
    server.listen(1337, '127.0.0.1');
    
} catch (error) {
    console.log(error);
    
}




console.log("listening ");