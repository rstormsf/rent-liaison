/**
 * Optimize js assets
 */
module.exports = function(grunt) {

  grunt.config.set('requirejs', {
    compile: {
      options: {
        baseUrl: "assets/js",
        mainConfigFile: "assets/js/config.js",
        paths: {
          requireLib: './vendor/requirejs/require'
        },
        out: ".tmp/public/js/source.js",
        include: 'requireLib',
        optimize: 'uglify2',
        name: 'main',
        generateSourceMaps: true,
        preserveLicenseComments: false,
        useStrict: true,
        wrap: true
      }
    }
  });

	grunt.loadNpmTasks('grunt-contrib-requirejs');
};
