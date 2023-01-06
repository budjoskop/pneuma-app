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
var windowScroll = __webpack_require__(21);
var nav = __webpack_require__(24);
var animationsHandler = __webpack_require__(26);

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
var images = ['android1.png', 'android2.png', 'android3.png', 'android4.png', 'pneuma1.png', 'pneuma2.png', 'pneuma3.png', 'pneuma4.png', 'pneuma5.png'];

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
	"./Pneuma.png": 5,
	"./andoird/android1.png": 6,
	"./andoird/android2.png": 7,
	"./andoird/android3.png": 8,
	"./andoird/android4.png": 9,
	"./andoird/playstore-badge.svg": 10,
	"./iphone/appstore-badge.svg": 11,
	"./iphone/pneuma1.png": 12,
	"./iphone/pneuma2.png": 13,
	"./iphone/pneuma3.png": 14,
	"./iphone/pneuma4.png": 15,
	"./iphone/pneuma5.png": 16,
	"./social/facebook-logo.svg": 17,
	"./social/facebook-small.svg": 18,
	"./social/instagram-logo.svg": 19,
	"./social/instagram-small.svg": 20
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

module.exports = __webpack_require__.p + "assets/img/Pneuma.png";

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/android1.png";

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/android2.png";

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/android3.png";

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/android4.png";

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

module.exports = __webpack_require__.p + "assets/img/pneuma1.png";

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/pneuma2.png";

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/pneuma3.png";

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/pneuma4.png";

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/pneuma5.png";

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/facebook-logo.svg";

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/facebook-small.svg";

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/instagram-logo.svg";

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/instagram-small.svg";

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var headerOnScroll = __webpack_require__(22),
    checkIfInView = __webpack_require__(23);

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
/* 22 */
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
/* 23 */
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
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// ----- Typical module

// var $ = require('jquery');

var smoothScroll = __webpack_require__(25);

module.exports = function () {
    // Main navigation

    var windowWidth = window.innerWidth || document.documentElement.innerWidth,
        body = document.querySelector('body'),
        trigger = document.querySelector('.b-header__burger'),
        nav = document.querySelector('.c-nav'),
        close = nav.querySelector('.c-nav__close'),
        navLinks = nav.querySelectorAll('.c-nav__link');

    for (var i = 0; i < navLinks.length; i++) {
        var selector = "[data-scroll='" + navLinks[i].getAttribute('data-trigger') + "']";
        var scrollTo = document.querySelector(selector);
        smoothScroll(navLinks[i], scrollTo);
    }

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
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (trigger, dest) {
    // Smooth scrolling

    var windowWidth = window.innerWidth,
        body = document.querySelector('body'),
        nav = document.querySelector('.c-nav');

    function smoothScroll(destination) {
        var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;
        var easing = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'linear';
        var callback = arguments[3];


        var easings = {
            linear: function linear(t) {
                return t;
            },
            easeInQuad: function easeInQuad(t) {
                return t * t;
            },
            easeOutQuad: function easeOutQuad(t) {
                return t * (2 - t);
            },
            easeInOutQuad: function easeInOutQuad(t) {
                return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
            },
            easeInCubic: function easeInCubic(t) {
                return t * t * t;
            },
            easeOutCubic: function easeOutCubic(t) {
                return --t * t * t + 1;
            },
            easeInOutCubic: function easeInOutCubic(t) {
                return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
            },
            easeInQuart: function easeInQuart(t) {
                return t * t * t * t;
            },
            easeOutQuart: function easeOutQuart(t) {
                return 1 - --t * t * t * t;
            },
            easeInOutQuart: function easeInOutQuart(t) {
                return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
            },
            easeInQuint: function easeInQuint(t) {
                return t * t * t * t * t;
            },
            easeOutQuint: function easeOutQuint(t) {
                return 1 + --t * t * t * t * t;
            },
            easeInOutQuint: function easeInOutQuint(t) {
                return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
            }
        };

        var start = window.pageYOffset;
        var startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

        var documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
        var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
        var destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop;
        var destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);

        if ('requestAnimationFrame' in window === false) {
            window.scroll(0, destinationOffsetToScroll);
            if (callback) {
                callback();
            }
            return;
        }

        function scroll() {
            var now = 'now' in window.performance ? performance.now() : new Date().getTime();
            var time = Math.min(1, (now - startTime) / duration);
            var timeFunction = easings[easing](time);
            window.scroll(0, Math.ceil(timeFunction * (destinationOffsetToScroll - start) + start));

            if (window.pageYOffset === destinationOffsetToScroll) {
                if (callback) {
                    callback();
                }
                return;
            }

            requestAnimationFrame(scroll);
        }

        scroll();
    }

    // possible to add a callback function, after easing func
    trigger.addEventListener('click', function () {
        smoothScroll(dest, 800, 'easeInOutQuart');

        // close nav when clicking on any item
        if (windowWidth < 768) {
            nav.classList.remove('active');
            body.classList.remove('fixed');
        }
    });
};

/***/ }),
/* 26 */
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