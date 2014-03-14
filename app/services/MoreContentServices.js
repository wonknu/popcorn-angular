angular.module('myApp')
.factory('MoreContentServices', ['$rootScope', '$http', '$q', function ($rootScope, $http, $q)
{
	var data = [];
	var currentContent = null;
	var observerCallbacks = [];
	var pop = Popcorn("#myvideo");
	$http.get('data-events/video-content-events.json').success(function (res)
	{
		data = res;
		data.forEach(function (item)
		{
			pop.moreContent(item);
		});
	});
	var factory = {
		pop: pop,
		selected: function (newVal)
		{
			if(newVal) {
				currentContent = newVal;
				factory.notifyObservers();
			}
			return currentContent;
		},
		// Service Observer utilities
		registerObserverCallback : function (callback)
		{
			observerCallbacks.push(callback);
		},
		notifyObservers : function ()
		{
			angular.forEach(observerCallbacks, function (callback)
			{
				callback();
		    });
		}
	};
	return factory;
}]);
