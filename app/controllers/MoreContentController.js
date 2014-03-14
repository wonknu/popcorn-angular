angular.module('myApp')
// Controller initialisation with dependencie injection
// that require $scope and our service MoreContentServices
.controller('MoreContentController', function($scope, MoreContentServices)
{
	// retrieve additionnal video data from our service
	$scope.content = MoreContentServices.selected();
});
