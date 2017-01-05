module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
    	dis: {
    		src: [
    			'js/libs/*.js',
    			'js/global.js'
    		],
    		dest: 'js/build/production.js'
    	}
    },
    uglify: {
	    build: {
	        src: 'js/build/production.js',
	        dest: 'js/build/production.min.js'
	    }
	},
	imagemin: {
	    dynamic: {
	        files: [{
	            expand: true,
	            cwd: 'images/',
	            src: ['*.{png,jpg,gif}'],
	            dest: 'images/build/'
	        }]
	    }
	},
	sass: {
	    dist: {
	        options: {
	            style: 'compressed'
	        },
	        files: {
	            'css/build/main.css': 'css/main.scss'
	        }
	    }
	},
	watch: {
		options: {
	        livereload: true,
	    },
		scripts: {
		    files: ['js/*.js'],
		    tasks: ['concat', 'uglify'],
		    options: {
		        spawn: false,
		    },
		},
		css: {
		    files: ['css/*.scss'],
		    tasks: ['sass'],
		    options: {
		        spawn: false,
		    }
		}
	}
  });

  // Load plugin
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Default task(s) to run when we type "grunt" into the terminal
  grunt.registerTask('default', ['concat', 'uglify', 'imagemin', 'sass']);

};