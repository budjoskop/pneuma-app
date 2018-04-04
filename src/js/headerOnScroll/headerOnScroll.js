module.exports = function() {
    // Header scroll handler

    var windowWidth = window.innerWidth,
        html = document.documentElement,
        header = document.querySelector('.b-header');

    if (windowWidth < 1025) html.scrollTop > 80 ? header.classList.add('bg--white') : header.classList.remove('bg--white');
    else html.scrollTop > 100 ? header.classList.add('bg--white') : header.classList.remove('bg--white');

};
