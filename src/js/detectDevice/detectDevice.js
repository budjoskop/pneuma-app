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
        iphoneBadge.style.display = 'none';
    }

    if (testDevice('mac os')) {
        androidBadge.style.display = 'none';
    }
};
