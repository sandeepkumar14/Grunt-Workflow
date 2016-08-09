(function () {
   'use strict';

module.exports= function(grunt){
   grunt.initConfig({

      pkg: grunt.file.readJSON('package.json'),

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

// ------------------- jsHint Task -------------------//
      jshint: {
        options: {
          force: true
        },
        files: ['contents/javascript/*.js']
      }, //jshint


// ------------------- jsHint Task -------------------//

      uglify: {
        development: {
          files: [{
            expanded: true,
            src: 'contents/javascript/*.js',
            dest: 'production/javascript/scripts.js'
          }]
        },
        options: {
          mingle: false,
          compress: {
            drop_console:true
          }
        }
      },//uglify


// ------------------- HTML min Task -------------------//

      htmlmin: {
        dist: {
          options: {
            removeComments: true,
            collapseWhitespace: true
          },
          files: {
            'production/html/index_min.html': 'development/html/index.html'
          }
        }
      },


// ------------------- CSS min -------------------//
      cssmin: {
        dist: {
          options: {
            removeComments: true,
            collapseWhitespace: true
          },//options
          files: {
            'production/css/style.css': 'development/css/*.css'
          },//files
        }//distribution
      },// cssmin task



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
grunt.loadNpmTasks('grunt-contrib-jshint'); // grunt jshint
grunt.loadNpmTasks('grunt-contrib-uglify'); // grunt uglify
grunt.loadNpmTasks('grunt-contrib-htmlmin'); // grunt html-min
grunt.loadNpmTasks('grunt-contrib-cssmin'); // grunt css-min


// ------------------- Default Tasks -------------------//
grunt.registerTask('default',['concat','sass', 'connect','jshint','uglify', 'htmlmin', 'cssmin', 'watch']); 
};// wrapper function

}()); // use strict function 