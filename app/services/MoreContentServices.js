angular.module('myApp')
.factory('MoreContentServices', ['$rootScope', '$http', '$q', function ($rootScope, $http, $q)
{
	var data = [];
	var currentContent = null;
	var pop = Popcorn("#myvideo"); // initialise Popcorn JS with video tag
	// Load json file with additionnal video content
	$http.get('data-events/video-content-events.json').success(function (res)
	{
		data = res;
		data.forEach(function (item) // loop through content
		{
			pop.moreContent(item); // register plugin for each additionnal video content
		});
	});
	var factory = {
		pop: pop, // retrieve popcorn object
		selected: function (newVal) // retrive current content
		{
			if(newVal) {
				currentContent = newVal;
				factory.notifyObservers();
			}
			return currentContent;
		}
	};
	return factory;
}]);
