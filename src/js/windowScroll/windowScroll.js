var headerOnScroll = require('../headerOnScroll/headerOnScroll.js');

module.exports = function() {
    // Window scroll handler

    var win = window;

    function scrollHandler() {
        headerOnScroll();
    }

    window.addEventListener('scroll', scrollHandler);
};
