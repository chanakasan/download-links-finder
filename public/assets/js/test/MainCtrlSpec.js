'use strict';

describe('myApp.controllers', function () {
    var scope;
    var Controller = null;

    beforeEach(module('myApp.controllers'));

    beforeEach(inject(function($rootScope, $controller) {
        scope = $rootScope.$new;

        Controller = $controller('MainCtrl', {
            $scope: scope
        });
    }))

    describe('MainCtrl specs', function(){

        it('is not be null', function () {
            expect(Controller).not.to.be.null;
        })

        it('has welcome message', function () {
            expect(scope.message).to.equal('hello AngularJS');
        })
    })

});
