webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// ----- Main app file

// var $ = require('jquery');

// ----- Path to main SCSS file
var css = __webpack_require__(1);

// ----- Require modules here
var windowScroll = __webpack_require__(3);
var nav = __webpack_require__(5);

// ----- Call modules here
// $(document).ready(function() {
windowScroll();
nav();
// });

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var headerOnScroll = __webpack_require__(4);

module.exports = function () {
    // Window scroll handler

    var win = window;

    function scrollHandler() {
        headerOnScroll();
    }

    window.addEventListener('scroll', scrollHandler);
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
    // Header scroll handler

    var html = document.documentElement,
        header = document.querySelector('.b-header');

    html.scrollTop > 200 ? header.classList.add('bg--white') : header.classList.remove('bg--white');
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// ----- Typical module

// var $ = require('jquery');

module.exports = function () {
    // Main navigation

    var windowWidth = window.innerWidth || document.documentElement.innerWidth,
        body = document.querySelector('body'),
        trigger = document.querySelector('.b-header__burger'),
        nav = document.querySelector('.c-nav'),
        close = nav.querySelector('.c-nav__close');

    function triggerHandler() {
        nav.classList.add('active');
        body.classList.add('fixed');
    }

    function closeHandler() {
        nav.classList.remove('active');
        body.classList.remove('fixed');
    }

    trigger.addEventListener('click', triggerHandler);
    close.addEventListener('click', closeHandler);
};

/***/ })
],[0]);