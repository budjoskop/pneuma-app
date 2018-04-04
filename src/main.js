// ----- Main app file

// var $ = require('jquery');

// ----- Path to main SCSS file
var css = require('./scss/style.scss');

// ----- Require modules here
var windowScroll = require('./js/windowScroll/windowScroll.js');
var nav = require('./js/nav/nav.js');
var animationsHandler = require('./js/animationsHandler/animationsHandler.js');

// ----- Call modules here
windowScroll();
nav();
animationsHandler();
