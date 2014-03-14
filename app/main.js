var myApp = angular.module('myApp', ['ngRoute', 'ngSanitize'])
.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'template/player.html',
			controller: 'MoreContentController'
		})
		.otherwise({
			redirectTo: '/'
		});
});