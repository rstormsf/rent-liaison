module.exports = function (grunt) {
	grunt.registerTask('compileAssets', [
		'clean:dev',
    'jade:compile',
		'jst:dev',
		'less:dev',
		'copy:dev'
	]);
};
