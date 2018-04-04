module.exports = function() {
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
