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
var nav = __webpack_require__(21);
var animationsHandler = __webpack_require__(22);

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
var images = ['android1.png', 'android2.png', 'android3.png', 'android4.png', 'iphone1.png', 'iphone2.png', 'iphone3.png', 'iphone4.png'];

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
	"./andoird/android1.png": 5,
	"./andoird/android2.png": 6,
	"./andoird/android3.png": 7,
	"./andoird/android4.png": 8,
	"./andoird/google-play-download-android-app.svg": 9,
	"./andoird/playstore-badge.svg": 10,
	"./iphone/appstore-badge.svg": 11,
	"./iphone/iphone1.png": 12,
	"./iphone/iphone2.png": 13,
	"./iphone/iphone3.png": 14,
	"./iphone/iphone4.png": 15,
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

module.exports = __webpack_require__.p + "assets/img/android1.png";

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/android2.png";

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/android3.png";

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/android4.png";

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

module.exports = __webpack_require__.p + "assets/img/appstore-badge.svg";

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/iphone1.png";

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/iphone2.png";

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/iphone3.png";

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/iphone4.png";

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


var headerOnScroll = __webpack_require__(19),
    checkIfInView = __webpack_require__(20);

module.exports = function () {
    // Window scroll handler

    var objectsBlock = document.querySelector('.b-objects'),
        toAnimate = objectsBlock.querySelectorAll('.u-animated');

    function scrollHandler() {
        headerOnScroll();

        for (var i = 0; i < toAnimate.length; i++) {
            checkIfInView(toAnimate[i], 'in--view');
        }
    }

    window.addEventListener('scroll', scrollHandler);
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


module.exports = function (element, classToAdd) {
    // check if element is in view

    var win = window,
        winBottom = win.pageYOffset + win.innerHeight,
        elementTop = element.offsetTop;

    if (winBottom - 200 > elementTop) {
        element.classList.add(classToAdd);
    }
};

/***/ }),
/* 21 */
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
/* 22 */
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