// ----- Typical module

// var $ = require('jquery');

var smoothScroll = require('../smoothScroll/smoothScroll.js');

module.exports = function() {
    // Main navigation

    var windowWidth = window.innerWidth || document.documentElement.innerWidth,
        body = document.querySelector('body'),
        trigger = document.querySelector('.b-header__burger'),
        nav = document.querySelector('.c-nav'),
        close = nav.querySelector('.c-nav__close'),
        navLinks = nav.querySelectorAll('.c-nav__link');

    for (let i = 0; i < navLinks.length; i++) {
        let selector = "[data-scroll='" + navLinks[i].getAttribute('data-trigger') + "']";
        let scrollTo = document.querySelector(selector);
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
