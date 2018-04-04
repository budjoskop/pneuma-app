webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// ----- Main app file

// var $ = require('jquery');

// ----- Path to main SCSS file
var css = __webpack_require__(1);

// ----- Require modules here
var detectDevice = __webpack_require__(3);
var windowScroll = __webpack_require__(18);
var nav = __webpack_require__(20);
var animationsHandler = __webpack_require__(21);

// ----- Call modules here
detectDevice();
windowScroll();
nav();
animationsHandler();

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var imgPath = __webpack_require__(4);
var images = ['1android-t.png', '2android-t.png', '3android-t.png', '4android-t.png', '1iphone-t.png', '2iphone-t.png', '3iphone-t.png', '4iphone-t.png'];

var getImgs = function getImgs() {
    return images.map(function (name) {
        return '<img src=\'' + imgPath(name, true) + '\' alt=\'' + name + '\' />';
    });
};

module.exports = function () {
    // serve content depending on device

    var agent = navigator.userAgent,
        iphoneBadge = document.querySelector('.ios-badge'),
        androidBadge = document.querySelector('.android-badge');

    function testDevice(device) {
        var reg = new RegExp(device, 'gi');
        return agent.match(reg) ? true : false;
    }

    if (testDevice('android')) {

        var images = document.querySelectorAll('.o-main__img');

        // iterate through all images, and change src
        for (var i = 0; i < images.length; i++) {
            var imgSrc = images[i].getAttribute('src');
            var newSrc = imgSrc.replace(/iphone/, 'android');

            images[i].setAttribute('src', newSrc);
        }

        iphoneBadge.style.display = 'none';
    }

    if (testDevice('mac os')) {
        androidBadge.style.display = 'none';
    }
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./andoird/1android-t.png": 5,
	"./andoird/2android-t.png": 6,
	"./andoird/3android-t.png": 7,
	"./andoird/4android-t.png": 8,
	"./andoird/google-play-download-android-app.svg": 9,
	"./andoird/playstore-badge.svg": 10,
	"./iphone/1iphone-t.png": 11,
	"./iphone/2iphone-t.png": 12,
	"./iphone/3iphone-t.png": 13,
	"./iphone/4iphone-t.png": 14,
	"./iphone/appstore-badge.svg": 15,
	"./klaber-logo.png": 16,
	"./klaber.png": 17
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 4;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/1android-t.png";

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/2android-t.png";

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/3android-t.png";

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/4android-t.png";

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/google-play-download-android-app.svg";

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/playstore-badge.svg";

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/1iphone-t.png";

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/2iphone-t.png";

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/3iphone-t.png";

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/4iphone-t.png";

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/appstore-badge.svg";

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/klaber-logo.png";

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/klaber.png";

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var headerOnScroll = __webpack_require__(19);

module.exports = function () {
    // Window scroll handler

    var win = window;

    function scrollHandler() {
        headerOnScroll();
    }

    win.addEventListener('scroll', scrollHandler);
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
    // Header scroll handler

    var windowWidth = window.innerWidth,
        html = document.documentElement,
        header = document.querySelector('.b-header');

    if (windowWidth < 1025) window.pageYOffset > 80 ? header.classList.add('bg--white') : header.classList.remove('bg--white');else window.pageYOffset > 100 ? header.classList.add('bg--white') : header.classList.remove('bg--white');
};

/***/ }),
/* 20 */
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

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
    // Animations handler

    var hero = document.querySelector('.b-hero'),
        heroObject = hero.querySelector('.o-main'),
        heroObjectText = heroObject.querySelector('.o-main__text'),
        heroObjectImg = heroObject.querySelector('.o-main__img');

    function winLoadHandler() {
        heroObjectText.classList.add('in--view');
        heroObjectImg.classList.add('in--view');
    }

    window.addEventListener('load', winLoadHandler);
};

/***/ })
],[0]);