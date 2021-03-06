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

    // utility function that returns a function which is called to render
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

            $(document).ready(function () {
                $(this).scrollTop(0);
            });
        };
    };

    var JenniferT2router = Backbone.Router.extend({

        // you can see that the crow route takes an id so that 
        // we can use the same renderer for each crow
        routes: {
            'home': 'renderHome',
            'crows': 'renderCrows',
            "crow/:id": 'renderCrow',
            'postage': 'renderPostage',
            'postage/:id': 'renderPost',
            'collage': 'renderCollage',
            'collage/:id': 'renderColl',
            'gw_quilts': 'renderGWquilts',
            'gw_quilt/:id': 'renderGWquilt',
            'permie': 'renderPermaculture',
            'permie/:id': 'renderPermie',
            'ptquilts': 'renderPtQuilts',
            'ptquilt/:id': 'renderPtQuilt'
        },

        renderHome: getRenderer('html/home.htm', $('.nav li#home')),
        renderCrows: getRenderer('html/crows.htm', $('.nav li#crows')),
        renderGWquilts: getRenderer('html/gw_quilts.htm', $('.nav li#gw_quilts')),
        renderPostage: getRenderer('html/postage.htm', $('.nav li#postage')),
        renderCollage: getRenderer('html/collage.htm', $('.nav li#collage')),
        renderPermaculture: getRenderer('html/permie.htm', $('.nav li#permie')),
        renderPtQuilts: getRenderer('html/pt_quilts.htm', $('.nav li#ptquilts')),

        // crow renderers are cached so that they can be re-used
        /* crowRenderers: {},
         renderCrow: function(id) {
            if (!this.crowRenderers[id]) {
                this.crowRenderers[id] = getRenderer('html/crows/page' + id + '.htm', $('.nav li#crows'));
            }
            this.crowRenderers[id]()
         }, */

        renderCrow: function (id) {
            var crow_html = crow_template(crows[id]);
            main_content_div.html(crow_html);
        },

        renderGWquilt: function (id) {
            var gwquilt_html = gwquilt_template(gw_quilts[id]);
            main_content_div.html(gwquilt_html);
        },

        renderPost: function (id) {
            var postage_html = crow_template(post[id]);
            main_content_div.html(postage_html);
        },

        renderColl: function (id) {
            var collage_html = crow_template(collage[id]);
            main_content_div.html(collage_html);
        },

        renderPermie: function (id) {
            var permie_html = crow_template(permie[id]);
            main_content_div.html(permie_html);
        },

        renderPtQuilt: function (id) {
            var ptquilts_html = crow_template(ptquilts[id]);
            main_content_div.html(ptquilts_html);
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
