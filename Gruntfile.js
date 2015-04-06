module.exports = function(grunt) {

    var config = {};
    config.sass = {
        dist: {
            options: {
                loadPath: ['node_modules/csstyle/']
            },
            files: [{
                expand: true,
                cwd: 'resources/stylesheets/',
                src: ['*.scss'],
                dest: 'public/assets/css/compiled/',
                ext: '.css'
            }]
        },
    };
    config.watch = {
        sass: {
            files: 'resources/stylesheets/*.scss',
            tasks: ['sass'],
            options: {
                livereload: true,
            },
        },
        server: {
            files: ['start.log'],
            options: {
                livereload: true
            }
        },
    };

    grunt.initConfig(config);

    // Load the plugins
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');

    // Default task(s).
    grunt.registerTask('default', ['sass', 'watch']);
};
