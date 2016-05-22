var _ = require('lodash');
var ws = require('ws');
var clients = [];

exports.connect = function(server){
	var wss = new ws.Server({server:server});
	wss.on('connection', function(ws){
		console.log('connection made');
		clients.push(ws);
//		ws.send('hello!');
		exports.broadcast('new client joined');
/*
		ws.on('message', function(message){
			ws.send('echo:' + message);
			exports.broadcast(message);
		});
*/
		ws.on('close', function(){
			_.remove(clients, ws);
//			connection.send('BYE');
		});

	});

}

exports.broadcast = function(topic, data){
	var json = JSON.stringify({topic:topic, data:data});
	clients.forEach(function(client){
		client.send(json);
	});
}