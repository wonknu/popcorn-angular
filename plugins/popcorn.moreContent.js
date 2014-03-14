(function (Popcorn)
{  
	Popcorn.plugin("moreContent" , function(options) // register our popcorn plugin
	{
		return {
			start: function(event, options) // called by popcorn when video time is at the start of our plugin life
			{
				var scope = angular.element(document.querySelector('.more-content-controller')).scope();
				scope.content = options.content;
				scope.$apply();
			},
			end: function(event, options) // called by popcorn when video time is at the end of our plugin life
			{
				//console.log('end');
			}
		};
	});
})(Popcorn);