// Generated on 2013-12-10 using generator-angular 0.4.0
'use strict';
var LIVERELOAD_PORT = 35730;
var lrSnippet = require('connect-livereload')({
  port: LIVERELOAD_PORT
});
var mountFolder = function (connect, dir) {
  return connect.static(require('path').resolve(dir));
};

module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);
  grunt.loadNpmTasks('grunt-replace');

  // configurable paths
  var yeomanConfig = {
    app: 'app',
    dist: 'dist'
  };

  try {
    yeomanConfig.app = require('./bower.json').appPath || yeomanConfig.app;
  } catch (e) {}

  grunt.initConfig({
    yeoman: yeomanConfig,
    watch: {
      coffee: {
        files: ['<%= yeoman.app %>/scripts/{,*/}*.coffee'],
        tasks: ['coffee:dist']
      },
      styles: {
        files: ['<%= yeoman.app %>/styles/{,*/}*.css'],
        tasks: ['copy:styles', 'autoprefixer']
      },
      livereload: {
        options: {
          livereload: LIVERELOAD_PORT
        },
        files: [
          '<%= yeoman.app %>/{,*/}*.html',
          '.tmp/styles/{,*/}*.css',
          '{.tmp,<%= yeoman.app %>}/scripts/{,*/}*.js',
          '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },
    autoprefixer: {
      options: ['last 1 version'],
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/styles/',
          src: '{,*/}*.css',
          dest: '.tmp/styles/'
        }]
      }
    },
    connect: {
      options: {
        port: 8000,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: 'localhost'
      },
      livereload: {
        options: {
          middleware: function (connect) {
            return [
              lrSnippet,
              mountFolder(connect, '.tmp'),
              mountFolder(connect, yeomanConfig.app)
            ];
          }
        }
      },
      dist: {
        options: {
          middleware: function (connect) {
            return [
              mountFolder(connect, yeomanConfig.dist)
            ];
          }
        }
      }
    },
    open: {
      server: {
        url: 'http://localhost:<%= connect.options.port %>'
      }
    },
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= yeoman.dist %>/*',
            '!<%= yeoman.dist %>/.git*'
          ]
        }]
      },
      server: '.tmp'
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        '<%= yeoman.app %>/scripts/{,*/}*.js'
      ]
    },
    coffee: {
      options: {
        sourceMap: true,
        sourceRoot: ''
      },
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/scripts',
          src: '{,*/}*.coffee',
          dest: '.tmp/scripts',
          ext: '.js'
        }]
      }
    },
    // not used since Uglify task does concat,
    // but still available if needed
    /*concat: {
      dist: {}
    },*/
    rev: {
      dist: {
        files: {
          src: [
            '<%= yeoman.dist %>/scripts/{,*/}*.js',
            '<%= yeoman.dist %>/styles/{,*/}*.css',
            '<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
            '<%= yeoman.dist %>/styles/fonts/*'
          ]
        }
      }
    },
    useminPrepare: {
      html: '<%= yeoman.app %>/index.html',
      options: {
        dest: '<%= yeoman.dist %>'
      }
    },
    usemin: {
      html: ['<%= yeoman.dist %>/{,*/}*.html'],
      css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
      options: {
        dirs: ['<%= yeoman.dist %>']
      }
    },
    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.{png,jpg,jpeg}',
          dest: '<%= yeoman.dist %>/images'
        }]
      }
    },
    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.svg',
          dest: '<%= yeoman.dist %>/images'
        }]
      }
    },
    cssmin: {
      // By default, your `index.html` <!-- Usemin Block --> will take care of
      // minification. This option is pre-configured if you do not wish to use
      // Usemin blocks.
      // dist: {
      //   files: {
      //     '<%= yeoman.dist %>/styles/main.css': [
      //       '.tmp/styles/{,*/}*.css',
      //       '<%= yeoman.app %>/styles/{,*/}*.css'
      //     ]
      //   }
      // }
    },
    htmlmin: {
      dist: {
        options: {
          /*removeCommentsFromCDATA: true,
          // https://github.com/yeoman/grunt-usemin/issues/44
          //collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeAttributeQuotes: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeOptionalTags: true*/
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>',
          src: ['*.html', 'views/*.html'],
          dest: '<%= yeoman.dist %>'
        }]
      }
    },
    // Put files not handled in other tasks here
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>',
          dest: '<%= yeoman.dist %>',
          src: [
            '*.{ico,png,txt}',
            '.htaccess',
            'bower_components/**/*',
            'images/{,*/}*.{gif,webp}',
            'styles/fonts/*'
          ]
        }, {
          expand: true,
          cwd: '.tmp/images',
          dest: '<%= yeoman.dist %>/images',
          src: [
            'generated/*'
          ]
        }]
      },
      styles: {
        expand: true,
        cwd: '<%= yeoman.app %>/styles',
        dest: '.tmp/styles/',
        src: '{,*/}*.css'
      }
    },
    concurrent: {
      server: [
        'coffee:dist',
        'copy:styles'
      ],
      dist: [
        'coffee',
        'copy:styles',
        'imagemin',
        'svgmin',
        'htmlmin'
      ]
    },
    cdnify: {
      dist: {
        html: ['<%= yeoman.dist %>/*.html']
      }
    },
    ngmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>/scripts',
          src: '*.js',
          dest: '<%= yeoman.dist %>/scripts'
        }]
      }
    },
    uglify: {
      dist: {
        files: {
          '<%= yeoman.dist %>/scripts/scripts.js': [
            '<%= yeoman.dist %>/scripts/scripts.js'
          ]
        }
      }
    },
    replace: {
      development: {
        options: {
          patterns: [{
            json: grunt.file.readJSON('./config/environments/development.json')
          }]
        },
        files: [{
          expand: true,
          flatten: true,
          src: ['./config/config.js'],
          dest: '<%= yeoman.app %>/scripts/services/'
        }]
      },
      staging: {
        options: {
          patterns: [{
            json: grunt.file.readJSON('./config/environments/staging.json')
          }]
        },
        files: [{
          expand: true,
          flatten: true,
          src: ['./config/config.js'],
          dest: '<%= yeoman.app %>/scripts/services/'
        }]
      },
      production: {
        options: {
          patterns: [{
            json: grunt.file.readJSON('./config/environments/production.json')
          }]
        },
        files: [{
          expand: true,
          flatten: true,
          src: ['./config/config.js'],
          dest: '<%= yeoman.app %>/scripts/services/'
        }]
      }
    }
  });

  grunt.registerTask('server', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'open', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'concurrent:server',
      'autoprefixer',
      'connect:livereload',
      'replace:development',
      'open',
      'watch'
    ]);
  });

  grunt.registerTask('build', [
    'clean:dist',
    'useminPrepare',
    'concurrent:dist',
    'autoprefixer',
    'concat',
    'copy:dist',
    'cdnify',
    'ngmin',
    'cssmin',
    'uglify',
    'rev',
    'usemin'
  ]);

  grunt.registerTask('staging', [
    'replace:staging'
    // Add further deploy related tasks here
  ]);

  grunt.registerTask('production', [
    'replace:production'
    // Add further deploy related tasks here
  ]);

  grunt.registerTask('default', [
    'jshint',
    'build'
  ]);
};
