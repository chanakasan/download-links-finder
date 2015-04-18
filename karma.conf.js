module.exports = function(config) {
    config.set({
        basePath: 'public/assets',
        frameworks: ['mocha', 'chai'],
        files: [
            'vendor/angular/angular.min.js',
            'vendor/angular-mocks/angular-mocks.js',
            'js/src/myApp.js',
            'js/src/**/*.js',
            'js/test/**/*.js',
        ],
        browsers: [
            'Chrome',
        ],
    });
};

