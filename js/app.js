$(document).ready(function() {

    // select the main div and cache for easy access
    var main_content_div = $('div#main-content');
    var all_nav_list_items = $('.nav li');

    // this is a function that will add the "active" css class to the 
    // active controller.  this will allow the user to see the tab they are
    // on as highlighted in the webpage
    var updateNav = function(activeControllers) {
        all_nav_list_items.removeClass("active");
        activeControllers.addClass("active");
    };

    // utilility function that retuns a function which is called to render
    // html to the main div area.  that html is lazy loaded and cached within
    // the "promise" object.  once the data has been loaded, calling .done(callback)
    // just immediately calls the callback on the cached result of the ajax call
    var getRenderer = function(path, activeNode) {
        // lazy loaded page
        var promise = null;

        return function() {
            // updates the nav bar to indicate which tab is active
            updateNav(activeNode);

            // actually load the page if it hasn't been loaded
            if (promise == null) {
                promise = $.get(path);        
            }

            // set page content when the page is loaded
            promise.done(function(data){ main_content_div.html(data); });
        };
    };

    var JenniferT2router = Backbone.Router.extend({

        // you can see that the crow route takes an id so that 
        // we can use the same renderer for each crow
        routes: {
            'home'          : 'renderHome',
            'crows'         : 'renderCrows',
            'crow/:id'      : 'renderCrow',
            'painted'       : 'renderPainted',
            'paint/:id'     : 'renderPaint'
        },

        renderHome: getRenderer('html/home.htm', $('.nav li#home')),
        renderCrows: getRenderer('html/crows.htm', $('.nav li#crows')),
        renderPainted: getRenderer('html/painted.htm', $('.nav li#painted')),

        // crow renderers are cached so that they can be re-used
        crowRenderers: {},
        renderCrow: function(id) {
            if (!this.crowRenderers[id]) {
                this.crowRenderers[id] = getRenderer('html/crows/page' + id + '.htm', $('.nav li#crows'));
            }
            this.crowRenderers[id]()
        },
        renderPaint: function(id) {
            if (!this.crowRenderers[id]) {
                this.crowRenderers[id] = getRenderer('html/painted/page' + id + '.htm', $('.nav li#painted'));
            }
            this.crowRenderers[id]()
        }
    });

    var router = new JenniferT2router();

    // start the history part so that people can use the back button
    Backbone.history.start();

    // start the navigator off at the home route
    router.navigate('#home');
    
    // actually render the home route
    router.renderHome();
});
