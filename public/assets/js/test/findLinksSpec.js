'use strict';

describe('myApp.services', function () {
    var findsLinks = null;
    var $http;

    beforeEach(module('myApp.services'));

    beforeEach(inject(function(_$http_, _findsLinks_) {
        $http = _$http_;
        findsLinks = _findsLinks_;
    }))

    describe('findsLinks spec', function() {

        it('is testable', function () {
            expect(findsLinks.canTest).to.equal(true);
        })
    });
});
