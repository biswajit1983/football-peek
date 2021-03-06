'use strict';

if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('/service-worker.js');
}

document.onkeydown = function (e) {
    switch (e.keyCode) {
        case 37:
            var leftArrowElement = document.getElementsByClassName('icon-left-open')[0];

            if (leftArrowElement) {
                window.location = leftArrowElement.href;
            }
            break;
        case 39:
            var rightArrowElement = document.getElementsByClassName('icon-right-open')[0];

            if (rightArrowElement) {
                window.location = rightArrowElement.href;
            }
            break;
        default:
            break;
    }
};