module.exports = function() {
    // Header scroll handler

    var windowWidth = window.innerWidth,
        html = document.documentElement,
        header = document.querySelector('.b-header');

    if (windowWidth < 1025) window.pageYOffset > 80 ? header.classList.add('bg--white') : header.classList.remove('bg--white');
    else window.pageYOffset > 100 ? header.classList.add('bg--white') : header.classList.remove('bg--white');

};
