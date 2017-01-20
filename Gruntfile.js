'use strict';

var browserifyNgannotate = require('browserify-ngannotate'),
    uglifyify = require('uglifyify'),
    _ = require('lodash');

module.exports = function(grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  var browserifyConfg = {
    alias: {

    },
    external: [
      'lodash', 'q', 'rx', 'async', 'mediator-js', 'angular', 'angular-ui-router', 'angular-material', 'angular-messages'
    ]
  };

  browserifyConfg.vendor = browserifyConfg.external.reduce(function(alias, lib) {
    if (! alias[lib]) {
      alias[lib] = null;
    }
    return alias;
  }, _.clone(browserifyConfg.alias));

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    app: {
      // configurable paths
      src: 'src',
      dist: 'www',
      url: '',
      default_local_server_url: 'http://localhost:8001'
    },

    copy: {
      static: {
        files: [
          {expand: true, cwd: '<%= app.src %>/', src: ['**/*.html'], dest: '<%= app.dist %>', filter: 'isFile'},
          {expand: true, cwd: '<%= app.src %>/', src: ['**/*.json'], dest: '<%= app.dist %>', filter: 'isFile'},
          {expand: true, cwd: '<%= app.src %>/', src: ['**/*.png'], dest: '<%= app.dist %>', filter: 'isFile'},
        ],
      },
      css: {
        files: [
          {src: 'node_modules/angular-material/angular-material.css', dest: '<%= app.dist %>/css/', expand: true, flatten: true },
        ]
      }
    },

    sass: {
        options: {
            sourceMap: true
        },
        dist: {
            files: {
                '<%= app.dist %>/css/app.css': '<%= app.src %>/sass/app.scss'
            }
        }
    },

    browserify: {
      options: {
        browserifyOptions: {
           debug: true
        }
      },
      bundle: {
        files: {
          "<%= app.dist %>/app/bundle.js": ["<%= app.src %>/app/app.js"]
        },
        options: {
          watch: true,
          alias: browserifyConfg.alias,
          external: browserifyConfg.external,
          transform: [
            // [browserifyNgannotate, {global: true}]
            // , [uglifyify, {global: true}]
          ]
        }
      },
      vendor: {
        src: ['.'],
        dest: '<%= app.dist %>/app/vendor.js',
        options: {
          debug: false,
          alias: browserifyConfg.vendor,
          transform: [
            [uglifyify, {global: true}]
          ]
        }
      }
    },

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      js: {
        files: ['<%= app.dist %>/app/bundle.js'],
        options: {
          livereload: '<%= connect.options.livereload %>'
        }
      },
      html: {
        files: ['<%= app.src %>/**/*.html'],
        tasks: ['copy:static']
      },
      sass: {
        files: ['**/*.scss'],
        tasks: ['sass']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= app.dist %>/**/*.html',
          '<%= app.dist %>/css/{,*/}*.css',
          '<%= app.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },

    // The actual grunt server settings
    connect: {
      options: {
        port: 9002,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: 'localhost',
        livereload: 35730
      },
      livereload: {
        options: {
          open: {
            target: '<%= app.url %>'
          },
          base: [
            '.tmp',
            '<%= app.dist %>'
          ]
        }
      }
    },

    // Empties folders to start fresh
    clean: {
      dist: ['<%= app.dist %>'],
      server: '.tmp'
    },

    eslint: {
      src: ["src/app/**/*.js"]
    }
  });

  grunt.loadNpmTasks("grunt-eslint");
  grunt.registerTask('serve', function (target) {
    if (target === 'local') {
      var conn = 'http://' + grunt.config.get('connect.options.hostname') + ':' +
        grunt.config.get('connect.options.port');
      var url = grunt.option('url') || grunt.config.get('app.default_local_server_url');
      grunt.config.set('app.url', conn + '/?url=' + url);
    } else {
      // open with no url passed to fh-js-sdk
      grunt.config.set('connect.livereload.options.open', true);
    }

    grunt.task.run([
      'build', 'connect:livereload', 'watch'
    ]);
  });

  grunt.registerTask('build', ['clean:dist', 'sass', 'copy', 'clean:server', 'browserify']);

  grunt.registerTask('default', ['serve']);
};
