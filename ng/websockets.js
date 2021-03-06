/*
angular.module('SocialApp')
.run(function ($rootScope){
	var url = 'ws://localhost:3000';
	var connection = new WebSocket(url);

	connection.onopen = function(){
		console.log('WebSocket connected');
	}

	connection.onmessage = function(e){
		console.log(e);
		var payload = JSON.parse(e.data);
		$rootScope.$broadcast('ws:'+payload.topic, payload.data);
	}

});
*/

/*
angular.module('SocialApp')
.run(function ($rootScope, $timeout){
	(function connect(){
		//var url = 'ws://localhost:3001';
		
		var url;
		if(window.location.protocol === "https:"){
			url = "wss://" + window.location.host;	
		}else {
			url = "ws://" + window.location.host;	
		}
		

		var connection = new WebSocket(url);

		connection.onopen = function(){
			console.log('WebSocket connected');
		}

		connection.onclose = function(e){
			console.log('WebSocket closed. Reconnecting...');
			$timeout(connect, 10*1000);
		}

		connection.onmessage = function(e){
			var payload = JSON.parse(e.data);
			$rootScope.$broadcast('ws:'+payload.topic, payload.data);
		}	
	})();
	
});
*/

angular.module('SocialApp')
.service('WebSocketService', function($rootScope){
	function websocketHost(){
		if(window.location.protocol === "https:"){
			return "wss://" + window.location.host;	
		}else {
			return "ws://" + window.location.host;	
		}
	}

	var connection;
	this.connect = function(){
		connection = new WebSocket(websocketHost());
		connection.onmessage = function(e){
			var payload = JSON.parse(e.data);
			$rootScope.$broadcast('ws:'+payload.topic, payload.data);
		}
	}

	this.send = function(topic, data){
		var json = JSON.stringify({topic: topic, data:data});
		connection.send(json);
	}

})
.run(function(WebSocketService){
	WebSocketService.connect();
});
