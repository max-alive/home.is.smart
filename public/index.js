    "use strict";
    const list = document.getElementById("headerlist");
    const burger = document.getElementById("burger");
    burger.addEventListener("click", function () {
        if (list.className === "headerlist"){
            list.className += " adaptheader";
        }
        else {
            list.className = "headerlist";
        }
    });
    const fwd = -210;
    const temp = document.getElementById("smallpaneltemp");
    const light = document.getElementById("smallpanellight");
    const cam = document.getElementById("smallpanelcam");
    const air = document.getElementById("smallpanelair");
    const devs = [temp, light, cam, air];
    devs.forEach(function (target) {
        target.addEventListener("wheel", function (direct) {
            if (direct.deltaY > 0){
                temp.style.top = fwd + 20 + "px";
                light.style.top = fwd + 150 + "px";
                cam.style.top = fwd + 280 + "px";
                air.style.top = fwd + 410 + "px";}
            else {
                temp.style.top = "20px";
                light.style.top = "150px";
                cam.style.top  = "280px";
                air.style.top = "410px";
            }
        });
    });
    const mql = window.matchMedia("(max-width: 1210px)");
    mql.addListener(mediaquery);
    function mediaquery() {
        if (mql.matches){
            temp.style.left = "15px";
            light.style.left = "210px";
            cam.style.left  = "405px";
            air.style.left = "600px";
            devs.forEach(function (target) {
                target.addEventListener("click", touchMove);
            });
        }
        else {
            devs.forEach(function (target) {
               target.removeEventListener("click", touchMove);
            });
            temp.style.left = "unset";
            light.style.left = "unset";
            cam.style.left  = "unset";
            air.style.left = "unset";
            }
    }
    function touchMove(){
        if (air.style.left === fwd * 1.5 + 600 + "px"){
        temp.style.left = "15px";
        light.style.left = "210px";
        cam.style.left  = "405px";
        air.style.left = "600px";
        }
        else{
        temp.style.left = fwd * 1.5 + 15 + "px";
        light.style.left = fwd * 1.5 + 210 + "px";
        cam.style.left = fwd * 1.5 + 405 + "px";
        air.style.left = fwd * 1.5 + 600 + "px";}
        }
    mediaquery();
