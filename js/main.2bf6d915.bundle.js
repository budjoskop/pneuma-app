webpackJsonp([0],[function(e,n,t){"use strict";var o=(t(1),t(3)),i=t(27),s=t(30),r=t(32);o(),i(),s(),r()},function(e,n){},,function(e,n,t){"use strict";t(4);e.exports=function(){function e(e){var t=new RegExp(e,"gi");return!!n.match(t)}var n=navigator.userAgent,t=document.querySelector(".ios-badge"),o=document.querySelector(".android-badge");if(e("android")){for(var i=document.querySelectorAll(".o-main__img"),s=0;s<i.length;s++){var r=i[s].getAttribute("src"),a=r.replace(/iphone/,"android");i[s].setAttribute("src",a)}t.style.display="none"}e("mac os")&&(o.style.display="none")}},function(e,n,t){function o(e){return t(i(e))}function i(e){var n=s[e];if(!(n+1))throw new Error("Cannot find module '"+e+"'.");return n}var s={"./Pneuma.png":5,"./andoird/android1.png":6,"./andoird/android2.png":7,"./andoird/android3.png":8,"./andoird/android4.png":9,"./andoird/playstore-badge.svg":10,"./iphone/appstore-badge.svg":11,"./iphone/iphone1.png":12,"./iphone/iphone2.png":13,"./iphone/iphone3.png":14,"./iphone/iphone4.png":15,"./iphone/pneuma1.png":16,"./iphone/pneuma2.png":17,"./iphone/pneuma3.png":18,"./iphone/pneuma4.png":19,"./iphone/pneuma5.png":20,"./klaber-logo.png":21,"./klaber.png":22,"./social/facebook-logo.svg":23,"./social/facebook-small.svg":24,"./social/instagram-logo.svg":25,"./social/instagram-small.svg":26};o.keys=function(){return Object.keys(s)},o.resolve=i,e.exports=o,o.id=4},function(e,n,t){e.exports=t.p+"assets/img/Pneuma.png"},function(e,n,t){e.exports=t.p+"assets/img/android1.png"},function(e,n,t){e.exports=t.p+"assets/img/android2.png"},function(e,n,t){e.exports=t.p+"assets/img/android3.png"},function(e,n,t){e.exports=t.p+"assets/img/android4.png"},function(e,n,t){e.exports=t.p+"assets/img/playstore-badge.svg"},function(e,n,t){e.exports=t.p+"assets/img/appstore-badge.svg"},function(e,n,t){e.exports=t.p+"assets/img/iphone1.png"},function(e,n,t){e.exports=t.p+"assets/img/iphone2.png"},function(e,n,t){e.exports=t.p+"assets/img/iphone3.png"},function(e,n,t){e.exports=t.p+"assets/img/iphone4.png"},function(e,n,t){e.exports=t.p+"assets/img/pneuma1.png"},function(e,n,t){e.exports=t.p+"assets/img/pneuma2.png"},function(e,n,t){e.exports=t.p+"assets/img/pneuma3.png"},function(e,n,t){e.exports=t.p+"assets/img/pneuma4.png"},function(e,n,t){e.exports=t.p+"assets/img/pneuma5.png"},function(e,n,t){e.exports=t.p+"assets/img/klaber-logo.png"},function(e,n,t){e.exports=t.p+"assets/img/klaber.png"},function(e,n,t){e.exports=t.p+"assets/img/facebook-logo.svg"},function(e,n,t){e.exports=t.p+"assets/img/facebook-small.svg"},function(e,n,t){e.exports=t.p+"assets/img/instagram-logo.svg"},function(e,n,t){e.exports=t.p+"assets/img/instagram-small.svg"},function(e,n,t){"use strict";var o=t(28),i=t(29);e.exports=function(){function e(){o();for(var e=0;e<t.length;e++)i(t[e],"in--view")}var n=document.querySelector(".b-objects"),t=n.querySelectorAll(".u-animated");window.addEventListener("scroll",e)}},function(e,n,t){"use strict";e.exports=function(){var e=window.innerWidth,n=(document.documentElement,document.querySelector(".b-header"));e<1025?window.pageYOffset>80?n.classList.add("bg--white"):n.classList.remove("bg--white"):window.pageYOffset>100?n.classList.add("bg--white"):n.classList.remove("bg--white")}},function(e,n,t){"use strict";e.exports=function(e,n){var t=window;t.pageYOffset+t.innerHeight-200>e.offsetTop&&e.classList.add(n)}},function(e,n,t){"use strict";var o=t(31);e.exports=function(){function e(){s.classList.add("active"),t.classList.add("fixed")}function n(){s.classList.remove("active"),t.classList.remove("fixed")}for(var t=(window.innerWidth||document.documentElement.innerWidth,document.querySelector("body")),i=document.querySelector(".b-header__burger"),s=document.querySelector(".c-nav"),r=s.querySelector(".c-nav__close"),a=s.querySelectorAll(".c-nav__link"),u=0;u<a.length;u++){var c="[data-scroll='"+a[u].getAttribute("data-trigger")+"']",p=document.querySelector(c);o(a[u],p)}i.addEventListener("click",e),r.addEventListener("click",n)}},function(e,n,t){"use strict";e.exports=function(e,n){function t(e){function n(){var e="now"in window.performance?performance.now():(new Date).getTime(),u=Math.min(1,(e-a)/t),c=s[o](u);if(window.scroll(0,Math.ceil(c*(d-r)+r)),window.pageYOffset===d)return void(i&&i());requestAnimationFrame(n)}var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"linear",i=arguments[3],s={linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:(4-2*e)*e-1},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}},r=window.pageYOffset,a="now"in window.performance?performance.now():(new Date).getTime(),u=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight),c=window.innerHeight||document.documentElement.clientHeight||document.getElementsByTagName("body")[0].clientHeight,p="number"==typeof e?e:e.offsetTop,d=Math.round(u-p<c?u-c:p);if("requestAnimationFrame"in window==!1)return window.scroll(0,d),void(i&&i());n()}var o=window.innerWidth,i=document.querySelector("body"),s=document.querySelector(".c-nav");e.addEventListener("click",function(){t(n,800,"easeInOutQuart"),o<768&&(s.classList.remove("active"),i.classList.remove("fixed"))})}},function(e,n,t){"use strict";e.exports=function(){function e(){o.classList.add("in--view"),i.classList.add("in--view")}var n=document.querySelector(".b-hero"),t=n.querySelector(".o-main"),o=t.querySelector(".o-main__text"),i=t.querySelector(".o-main__img");window.addEventListener("load",e)}}],[0]);