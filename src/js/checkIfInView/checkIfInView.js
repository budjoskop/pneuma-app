module.exports = function(element, classToAdd) {
    // check if element is in view

    var win = window,
        winBottom = win.pageYOffset + win.innerHeight,
        elementTop = element.offsetTop;

    if ((winBottom - 200) > elementTop) {
        element.classList.add(classToAdd);
    }
};
