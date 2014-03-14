angular.module('myApp')
// Custom directive
.directive('moreContent', [function ()
{
    return {
        restrict : 'E',
        controller: 'MoreContentController', // Directive controller
        templateUrl : 'template/moreContent.tpl.html' // template file with custom tag
    };
}]);