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
         dist: {
            src: ['Contents/javascript/*js'],
            dest: 'Development/javascript/allscripts.js'
         }//distribution
      },//concat task

      watch: {
         scripts: {
            files: ['Development/html/*.html',
                    'development/sass/*.scss',
                    'development/scripts/*.js'
                   ],// files
            tasks: ['concat', 'sass']//tasks       
         }
      },// grunt watch
      

   });//grunt Intialize config

grunt.loadNpmTasks('grunt-contrib-concat'); // grunt concat
grunt.loadNpmTasks('grunt-contrib-jshint'); // grunt jshint
grunt.loadNpmTasks('grunt-contrib-uglify'); // grunt uglify
grunt.loadNpmTasks('grunt-contrib-clean'); // grunt uglify
grunt.loadNpmTasks('grunt-contrib-watch'); // grunt watch

// grunt default tasks
grunt.registerTask('default',['concat', 'watch']); 
};// wrapper function

}()); // use strict function 