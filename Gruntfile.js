module.exports = function(grunt) {

    grunt.initConfig({

        clean: {
            build: {
                src: ['build']
            }
        },

        copy: {
            build: {
                cwd: 'source',
                src: ['**'],
                dest: 'build',
                expand: true
            }
        },


        //replace: {
        //  build: {
        //    src: ['build/**/*.html','build/**/*.css','build/**/*.js'],
        //    overwrite: true,
        //    replacements: [{
        //        from: "http://local.path/",
        //        to: "http://remote.path/"
        //      }]
        //  }
        //},

        cssmin: {
            build: {
                options: {
                    banner: '/* minified css */'
                },
                files: {
                    'build/css/combined.min.css': [
                        "build/vendor/bootstrap/dist/css/bootstrap.css",
                        "build/css/main.css"
                    ]
                }
            }
        },

        uglify: {
            build: {
                files: {
                    'build/js/combined.min.js': [

                        "build/vendor/jquery/dist/jquery.js",
                        "build/vendor/bootstrap/dist/js/bootstrap.js",
                        "build/js/index.js"

                    ]
                }
            }
        },

        processhtml: {

            build: {
                files: {
                    'build/index.html': ['build/index.html']
                }
            }

        }

    });

    grunt.registerTask(
        'build',
        'Compiles all of the assets and copies the files to the build directory.', 
        ['clean', 'copy', /* 'replace', */ 'cssmin', 'uglify', 'processhtml']
    );

    grunt.loadNpmTasks('grunt-text-replace');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-contrib-uglify');

};