console.log('This would be the main JS file.');

(function() {
    var urlPath = location.pathname, version = "0.0.1";
    require.config({
        paths: {
            jquery: "base/jquery",
            handlebars: "base/handlebars",
            turn: "base/turn.min",
            StartApp: "blog/StartApp"
        },
        shim: {
            turn: {
                deps: ['jquery']
            }
        }
    })

    require(['jquery', 'StartApp'], function($, StartApp) {
        var init = new StartApp();
    });
}).call(this)