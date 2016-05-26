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
angular.module('SocialApp')
.run(function ($rootScope, $timeout){
	(function connect(){
		//var url = 'ws://localhost:3001';
		var url = "ws://" + window.location.host;

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