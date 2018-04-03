module.exports = function() {
    // Header scroll handler

    var html = document.documentElement,
        header = document.querySelector('.b-header');

    html.scrollTop > 200 ? header.classList.add('bg--white') : header.classList.remove('bg--white');
};
