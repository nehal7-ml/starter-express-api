import {Socket }  from 'net';

var client = new Socket();
client.connect(1337, '127.0.0.1', function() {
	console.log('Connected');
	client.write('Hello, server! Love, Client.');
});

client.on('data', function(data) {
	console.log('Received: ' + data);
	client.end();
});

client.on('close', function() {
	console.log('Connection closed');
});