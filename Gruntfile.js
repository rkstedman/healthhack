module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // jshint custom spa and api javascript files
    jshint: {
      spa: {
      //  src: ['./public/javascripts/*.js']
      },
      api: {
        src: ['./lib/app.js']
      }
    },
    // copy bower install javascript files and css over
    copy: {
      deps: {
	files: [ 
        { expand: true, flatten: true, src: 'public/components/jquery/jquery.min.js', 
          dest: 'public/js/lib/', filter: 'isFile'},
        { expand: true, flatten: true, src: 'public/components/jquery/jquery.min.map', 
          dest: 'public/js/lib/', filter: 'isFile'},
        { expand: true, flatten: true, src: 'public/components/bootstrap/dist/js/bootstrap.js', 
          dest: 'public/js/lib/', filter: 'isFile' },
        { expand: true, flatten: true, src: 'public/components/bootstrap/dist/css/bootstrap.css', 
          dest: 'public/css/', filter: 'isFile'},
        { expand: true, flatten: true, src: 'public/components/bootstrap/dist/fonts/*', 
          dest: 'public/fonts/', filter: 'isFile' },
        { expand: true, flatten: true, src: 'public/components/angular/angular.js', 
          dest: 'public/js/lib/', filter: 'isFile' },
        { expand: true, flatten: true, src: 'public/components/angular-route/angular-route.js', 
          dest: 'public/js/lib/', filter: 'isFile' },
        { expand: true, flatten: true, src: 'public/components/angular-resource/angular-resource.js', 
          dest: 'public/js/lib/', filter: 'isFile' }
	]
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> v1 */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  

  // Default task(s).
  grunt.registerTask('default', ['jshint:spa']);

};
