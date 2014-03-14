angular.module('myApp')
.controller('MoreContentController', function($scope, MoreContentServices)
{
	$scope.content = MoreContentServices.selected();
});
