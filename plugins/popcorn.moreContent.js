(function (Popcorn)
{  
	Popcorn.plugin("moreContent" , function(options)
	{
		return {
			start: function(event, options)
			{
				var scope = angular.element(document.querySelector('.more-content-controller')).scope();
				scope.content = options.content;
				scope.$apply();
			},
			end: function(event, options)
			{
				//console.log('end');
			}
		};
	});
})(Popcorn);