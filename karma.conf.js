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

        browsers: ['Chrome_small'],

        customLaunchers: {
            Chrome_small: {
                base: 'Chrome',
                flags: [
                    '--window-size=300,300',
                    '--window-position=9999,9999',
                ]
            },
        },

    });
};

