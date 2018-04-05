var headerOnScroll = require('../headerOnScroll/headerOnScroll.js'),
    checkIfInView = require('../checkIfInView/checkIfInView.js');

module.exports = function() {
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
