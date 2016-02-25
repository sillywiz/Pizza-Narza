var elixir = require('laravel-elixir'),
  ngClassify = require('gulp-ng-classify'),
  gulp = require('gulp');

var paths = {
    'src': 'resources/assets'
};

gulp.task('angular-coffee', function () {
    return gulp.src(paths.src + '/coffee-ang/**/*.coffee')
      .pipe(ngClassify())
      .pipe(gulp.dest(paths.src + '/coffee'));
});

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */


require('laravel-elixir-jade');

elixir(function(mix) {
    mix.sass('**/*.scss');
    mix.task('angular-coffee');
    mix.copy('coffee-ang', 'coffee');
    mix.coffee('**/*.coffee');
    mix.jade({
      jadephp: false
    });
});
