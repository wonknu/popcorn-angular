angular.module('myApp')
.directive('moreContent', [function ()
{
    return {
        restrict : 'E',
        controller: 'MoreContentController',
        templateUrl : 'template/moreContent.tpl.html'
    };
}]);