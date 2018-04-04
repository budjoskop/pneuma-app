var headerOnScroll = require('../headerOnScroll/headerOnScroll.js');

module.exports = function() {
    // Window scroll handler

    var win = window;

    function scrollHandler() {
        headerOnScroll();
    }

    win.addEventListener('scroll', scrollHandler);
};
