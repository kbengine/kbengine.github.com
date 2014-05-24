require.config({
    baseUrl: 'http://www.kbengine.org/assets/js',
    paths: {
        jquery: 'lib/jquery',
        underscore: 'lib/underscore',
        backbone: 'lib/backbone'
    },
    shim: {
        'backbone': {
            //These script dependencies should be loaded before loading
            //backbone.js
            deps: ['underscore', 'jquery'],
            //Once loaded, use the global 'Backbone' as the
            //module value.
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        },
    }
});

require(["jquery", "app/app"], function($, stargazers) {
    $(document).ready(function() {
		stargazers.init();
    });
});