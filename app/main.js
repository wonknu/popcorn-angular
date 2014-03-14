var myApp = angular.module('myApp', ['ngRoute', 'ngSanitize']) // initialise our app
.config(function ($routeProvider) {
	// reqister our only route
	$routeProvider
		.when('/', {
			templateUrl: 'template/player.html',
			controller: 'MoreContentController'
		})
		.otherwise({
			redirectTo: '/'
		});
});