const { mix } = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/app.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css')
    .version();

mix.styles([
    'resources/assets/css/libs/dropzone.min.css',
    'resources/assets/css/libs/viewer.min.css'
],'public/css/libs.css');

mix.scripts([
    'resources/assets/js/libs/dropzone.min.js',
    'resources/assets/js/libs/viewer.js'
], 'public/js/libs.js');
