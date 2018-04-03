webpackJsonp([1],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// ----- Main app file

var $ = __webpack_require__(0);

// ----- Path to main SCSS file
var css = __webpack_require__(2);

// ----- Require modules here
var nav = __webpack_require__(4);

// ----- Call modules here
$(document).ready(function () {
    nav();
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// ----- Typical module

var $ = __webpack_require__(0);

module.exports = function () {
    // Main navigation

    var $trigger = $('.b-header__burger'),
        $nav = $('.c-nav'),
        $close = $nav.find('.c-nav__close');

    function triggerHandler() {
        $nav.slideDown(300);
    }

    function closeHandler() {
        $nav.slideUp(300);
    }

    $trigger.on('click', triggerHandler);
    $close.on('click', closeHandler);
};

/***/ })
],[1]);