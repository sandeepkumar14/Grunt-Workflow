(function () {
   'use strict';

module.exports= function(grunt){
   grunt.initConfig({

      concat: {
         options: {
            separator: '\n\n\n//-----------Seperator------------//;\n',
            banner: '//-------------Title--------------//;\n\n',
         },//options
         dist: {
            src: ['contents/javascript/*js'],
            dest: 'development/javascript/allscripts.js'
         }//distribution
      },//concat task

      bower_concat: {
        all: {
          dest: 'development/_bower.js',
          cssDest: 'development/css/lib/_bower.css'
          }
      },

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

      wiredep: {
        task: {
          src:'development/html/*.html'
        }
      },

      connect: {
        server: {
          options:{   
               hostname: 'localhost',
               port: 3000,
               base: 'development/',
               livereload: true
          }// options
        }//server    
      },//connect task

      watch: {
        gruntfile: {
          files: "gruntfile.js",
          // tasks: ['jshint:gruntfile']
        },
        options: {
            spawn: false,
            livereload: true
         },
         scripts: {
            files: ['contents/javascript/*.js',
                    'contents/sass/*.scss',
                    'development/html/*.html',
                   ],// files
            tasks: ['concat', 'sass']//tasks       
         }
      },// grunt watch
      

   });//grunt Intialize config

grunt.loadNpmTasks('grunt-contrib-concat'); // grunt concat
grunt.loadNpmTasks('grunt-contrib-sass'); // grunt sass
grunt.loadNpmTasks('grunt-contrib-watch'); // grunt watch
grunt.loadNpmTasks('grunt-contrib-connect'); // grunt connec
grunt.loadNpmTasks('grunt-wiredep'); // grunt connect
grunt.loadNpmTasks('grunt-bower-concat'); // grunt connect



// grunt default tasks
grunt.registerTask('default',['wiredep', 'bower_concat','concat','sass', 'connect', 'watch']); 
};// wrapper function

}()); // use strict function 