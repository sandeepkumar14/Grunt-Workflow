(function () {
   'use strict';

module.exports= function(grunt){
   grunt.initConfig({

// ---------------- Concat Task -------------------//
      concat: {
         options: {
            separator: '\n\n\n/* -----------Seperator------------*/\n',
            banner: '/*-------------Title--------------*/\n\n',
         },//options
         dist: {
            src: ['contents/javascript/*js'],
            dest: 'development/javascript/allscripts.js'
         },//Custom JS files
         devLibsJS: {
            src: ['contents/lib/angular/angular.js', 'contents/lib/angular-resource/angular-resource.js',
            'contents/lib/angular-route/angular-route.js','contents/lib/jquery/index.js','contents/lib/jquery-migrate/index.js','contents/lib/bootstrap/dist/bootstrap.js'],
            dest: 'development/lib/js/all-libs.js'
         },//JS libs collection
          devLibsCSS: {
            src: ['contents/lib/bootstrap/dist/css/bootstrap.css'],
            dest: 'development/lib/css/all-lib.css'
         },//CSS libs collection
         prodLibsJS: {
            src: ['contents/lib/angular/angular.min.js', 'contents/lib/angular-resource/angular-resource.min.js',
            'contents/lib/angular-route/angular-route.min.js','contents/lib/jquery_min/index.js','contents/lib/jquery-migrate_min/index.js','contents/lib/bootstrap/dist/js/bootstrap.min.js'],
            dest: 'production/libs/js/all-libs.js'
         },//JS libs collection
          prodLibsCSS: {
            src: ['contents/lib/bootstrap/dist/css/bootstrap.min.css'],
            dest: 'production/libs/css/all-lib.css'
         },//CSS libs collection
      },//concat task

// ------------------- SASS Task -------------------//
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

// ------------------- Connect Task -------------------//

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

// ------------------- Watch Task -------------------//

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

// ------------------- Task Registration -------------------//

grunt.loadNpmTasks('grunt-contrib-concat'); // grunt concat
grunt.loadNpmTasks('grunt-contrib-sass'); // grunt sass
grunt.loadNpmTasks('grunt-contrib-watch'); // grunt watch
grunt.loadNpmTasks('grunt-contrib-connect'); // grunt connect


// ------------------- Default Tasks -------------------//
grunt.registerTask('default',['concat','sass', 'connect', 'watch']); 
};// wrapper function

}()); // use strict function 