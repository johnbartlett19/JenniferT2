$(document).ready(function() {

    var main_content_div = $('div.main-content');
    var all_nav_list_items = $('nav li');

    var updateNav = function(activeControllers) {
        all_nav_list_items.removeClass("active");
        activeControllers.addClass("active");
    };

    var getRenderer = function(templatePath, activeControllers) {
        var promise = $.get(templatePath);
        return function() {
            // set page content
            promise.done(function(data){ main_content_div.html(data); });

            // update the active status
            updateNav(activeControllers);
        };
    };

    var JenniferT2router = Backbone.Router.extend({

        routes: {
            'home'          : 'renderHome',
            'crows'         : 'renderCrows',
            'painted'       : 'renderPainted',
            'goodwill'      : 'renderGoodwill',
            'mending'       : 'renderMending',
            'drummers'      : 'renderDrummers'
        },

        renderHome: getRenderer('/html/home.htm', $('nav li#home')),

        renderCrows: getRenderer('/html/crows.htm', $('nav li#crows')),

        renderPainted: getRenderer('#', $('nav li#papers')),

        renderGoodwill: getRenderer('#', $('nav li#papers')),

        renderMending: getRenderer('#', $('nav li#papers')),

        renderDrummers: getRenderer('#', $('nav li#papers')),

    });

    var router = new GinaAcademicRouter();

    Backbone.history.start();

    router.renderHome();
    router.navigate('#home');
});
