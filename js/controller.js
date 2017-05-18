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

myApp.factory('fieldValue', function () {
  return {data: '' }
});

myApp.controller('ctrl', function($scope,fieldValue){
	$scope.text = '';
	$scope.sendText = function(){
		fieldValue.data += $scope.text + '\n';
		$scope.text = '';
	}
});

myApp.controller('ctrl2', function($scope,fieldValue){
	$scope.selected2 = fieldValue;
});