module.exports = function(grunt) {

	// 1. Toutes les configurations vont ici: 
	grunt.initConfig({
	    pkg: grunt.file.readJSON('package.json'),

        concat: {
	        // 2. la configuration pour la concaténation va ici.
			dist: {
			        src: [
			            'js/*.js' // , tous les JS dans le dossier js
			        ],
			        dest: 'js/build/scripts.js'
			    },
			  // Concatener les css
			css: {
					src: [
			            'css/*.css' // , tous les css dans le dossier css
			        ],
			        dest: 'css/build/style.css'
			}
 	    }, // concat
 	    uglify: {
			build: {
	        		src: 'js/build/scripts.js',
	        		dest: 'js/build/scripts.min.js'
			}
		}

	});

	// 3. Nous disons à Grunt que nous voulons utiliser ce plug-in.
	grunt.loadNpmTasks('grunt-contrib-concat');
	//  Minifier
	grunt.loadNpmTasks('grunt-contrib-uglify');
	


	// 4. Nous disons à Grunt quoi faire lorsque nous tapons "grunt" dans la console.
	grunt.registerTask('default', ['concat', 'uglify']);
	

};
