'use strict';

angular.module('myApp.controllers').controller('MainCtrl', function($scope) {
    $scope.message = '- powered by AngularJS';

    // form
    $scope.webpage = {};
    $scope.form_submitted = false;
    $scope.request_completed = false;

    $scope.submit = function(isValid) {
        $scope.form_submitted = true;
        console.log('submitted!');

        if (isValid) {
            $scope.message = 'Awesome';
            $scope.request_completed = true;
        }
    };

    $scope.reset = function() {
        $scope.webpage = {};
    };
});
