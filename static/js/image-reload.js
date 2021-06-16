'use strict';

window.onload = function() {
    const image = document.getElementById("webcam");

    function updateImage() {
        image.src = image.src.split("?")[0] + "?" + new Date().getTime();
    }

    setInterval(updateImage, 60000);
};