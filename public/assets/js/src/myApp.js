var app = angular.module('myApp', []);

angular.module('myApp.controllers', []);
angular.module('myApp.services', []);

angular.module('myApp.controllers').controller('MainCtrl', function($scope) {
    $scope.data = {};
    $scope.data.is_submitted = false;
    $scope.message = 'hello AngularJS';

    $scope.find = function() {
       $scope.data.is_submitted = true;
    };
});