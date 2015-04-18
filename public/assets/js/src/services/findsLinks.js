'use strict';

/**
 * FindsLinks
 */
angular.module('myApp.services').factory('findsLinks', function($http) {

    return {
        canTest: true,

        get: function(websiteUrl) {
            $http.get('/api/links?url='+websiteUrl);
        },
    };
});

