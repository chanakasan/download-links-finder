var app = angular.module('myApp', []);

app.controller('MainCtrl', function($scope) {
    $scope.data = {};
    $scope.data.is_submitted = false;
    $scope.message = 'hello AngularJS';

    $scope.find = function() {
       $scope.data.is_submitted = true;
    };
});
