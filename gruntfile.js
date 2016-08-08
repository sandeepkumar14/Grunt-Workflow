(function () {
   'use strict';

module.exports= function(grunt){
   grunt.initConfig({

      concat: {
         options: {
            separator: '\n\n\n//-----------Seperator------------//;\n',
            banner: '//-------------Title--------------;\n\n',
         },//options
         dist: {
            src: ['contents/javascript/*js'],
            dest: 'development/javascript/allscripts.js'
         }//distribution
      },//concat task

      sass: {
        dist: {
          options: {
            style: "expanded"
          },//options
          files: [{
            src: 'contents/sass/*.scss',
            dest: 'development/css/style.css'
          }],//files
        }//distribution
      },// sass task

      watch: {
         options: {
            spawn: false
         },
         scripts: {
            files: ['contents/javascript/*.js',
                    'contents/sass/*.scss',
                    'development/html/*.html'
                   ],// files
            tasks: ['concat', 'sass']//tasks       
         }
      },// grunt watch
      

   });//grunt Intialize config

grunt.loadNpmTasks('grunt-contrib-concat'); // grunt concat
grunt.loadNpmTasks('grunt-contrib-sass'); // grunt sass
grunt.loadNpmTasks('grunt-contrib-watch'); // grunt watch

// grunt default tasks
grunt.registerTask('default',['concat','sass', 'watch']); 
};// wrapper function

}()); // use strict function 