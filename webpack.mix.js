let mix = require('laravel-mix');

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

mix.webpackConfig({
       resolve: {
         extensions: ['.js', '.vue', '.json'],
         alias: {
           '@': __dirname + '/resources'
         },
       },
     })
mix.js('resources/assets/js/app.js', 'public/js')
       .js('resources/assets/js/bootstrap.js', 'public/js')
       .sass('resources/assets/sass/app.scss', 'public/css') 
       .sass('resources/assets/js/assets/sass/paper-dashboard.scss', 'public/css');   
