var imgPath = require.context('../../assets/img/', true);
var images = [
    '1android-t.png',
    '2android-t.png',
    '3android-t.png',
    '4android-t.png',
    '1iphone-t.png',
    '2iphone-t.png',
    '3iphone-t.png',
    '4iphone-t.png'
];

var getImgs = () => images.map(name => `<img src='${imgPath(name, true)}' alt='${name}' />`);

module.exports = function() {
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
