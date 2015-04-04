var app = angular.module('myApp', []);

app.controller('MainCtrl', function($scope) {
    $scope.data = {};
    $scope.is_submitted = false;

    $scope.find_links = function() {
       $scope.is_submitted = true;
    };

    $scope.message = 'hello AngularJS';
});
