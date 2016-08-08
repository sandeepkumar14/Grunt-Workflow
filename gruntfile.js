(function () {
   'use strict';

module.exports= function(grunt){
   grunt.initConfig({

      concat: {
         options: {
            separator: '//-----------Seperator------------//;\n',
            banner: '//-------------title--------------;\n',
            footer: '\n//------------footer-------------;\n'
         },//options
      },//concat task

      jshint: {
         options: {
            force: true
         },
         ignores: ['Contents/output/anyfile.js'],
         files: ['development/output/*.js']
      },//jshint

      uglify: {
         development: {
            files: {
               '': ['']
            },
         },
         options: {

         }
      },//uglify

      watch: {
         options: {
            spawn: false,
            livereload: true
         },// watch options
         scripts: {
            files: ['development/html/*.html',
                    'development/sass/*.scss',
                    'development/scripts/*.js'
                   ],// files
            tasks: ['concat', 'sass']//tasks       

         }
      },// grunt watch
      clean: {
         options: {

         },
         files: ['./development/output/*'],
         folders: ['./development/output/folder']
      }

   });//grunt Intialize config

grunt.loadNpmTasks('grunt-contrib-concat'); // grunt concat
grunt.loadNpmTasks('grunt-contrib-jshint'); // grunt jshint
grunt.loadNpmTasks('grunt-contrib-uglify'); // grunt uglify
grunt.loadNpmTasks('grunt-contrib-clean'); // grunt uglify
grunt.loadNpmTasks('grunt-contrib-watch'); // grunt watch

// grunt default tasks
grunt.registerTask('default',['clean', 'concat', 'jshint', 'uglify', 'watch']); 
};// wrapper function

}()); // use strict function 