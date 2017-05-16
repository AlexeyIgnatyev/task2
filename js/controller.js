let myApp = angular.module('myApp', []);
myApp.controller('Parent', function ($scope){
	$scope.message = '';
	$scope.sendMessage = function(){
		$scope.$broadcast('send', {message: $scope.message});
		$scope.message = '';
	}
});

myApp.controller('Child', function ($scope) {
	$scope.receivedMessage = '';
	$scope.$on('send', function(event, data){
		$scope.receivedMessage += data.message + '\n';
  	});
});