/* ========================================================================
 * DOM-based Routing
 * Based on http://goo.gl/EUTi53 by Paul Irish
 *
 * Only fires on body classes that match. If a body class contains a dash,
 * replace the dash with an underscore when adding it to the object below.
 *
 * .noConflict()
 * The routing is enclosed within an anonymous function so that you can 
 * always reference jQuery with $, even when in .noConflict() mode.
 *
 * Google CDN, Latest jQuery
 * To use the default WordPress version of jQuery, go to lib/config.php and
 * remove or comment out: add_theme_support('jquery-cdn');
 * ======================================================================== */

(function($) {

// Use this variable to set up the common and page specific functions. If you 
// rename this variable, you will also need to rename the namespace below.
var Roots = {
  // All pages
  common: {
    init: function() {
      displayContent();
      showVideo();
      playPause();
      videoLoad();
      videoLoad2();
      videoLoad1();
      videoLoad3();
      videoLoad4();
      videoLoad5();
      videoLoad6();
      videoLoad7();
      videoLoad8();
      videoLoad9();
      videoLoad10();
      videoLoad11();
      videoLoad12();
      videoLoad13();
      videoLoad14();
      videoLoad15();
      videoLoad16();
      videoLoad17();
      videoLoad18();
      videoLoad19();
      videoLoad20();
      videoLoad21();
      videoLoad22();
      videoLoad23();
      videoLoad24();
      
    }
  },
  // Home page
  home: {
    init: function() {
    }
  },
  // About us page, note the change from about-us to about_us.
  all_projects: {
    init: function() {
      
    }
  }
};

// The routing fires all common scripts, followed by the page specific scripts.
// Add additional events for more control over timing e.g. a finalize event
var UTIL = {
  fire: function(func, funcname, args) {
    var namespace = Roots;
    funcname = (funcname === undefined) ? 'init' : funcname;
    if (func !== '' && namespace[func] && typeof namespace[func][funcname] === 'function') {
      namespace[func][funcname](args);
    }
  },
  loadEvents: function() {
    UTIL.fire('common');

    $.each(document.body.className.replace(/-/g, '_').split(/\s+/),function(i,classnm) {
      UTIL.fire(classnm);
    });
  }
};

$(document).ready(UTIL.loadEvents);

})(jQuery); // Fully reference jQuery after this point.
