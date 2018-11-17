    window.onload=()=>{
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
    const mqltransform = window.matchMedia("(max-width: 1210px)");
    const mqlmediumscreen = window.matchMedia("(max-width: 1090px) AND (min-width: 641px)");
    const mqlsmallscreen = window.matchMedia("(max-width: 551px)");
    const mqlarr = [mqltransform, mqlmediumscreen, mqlsmallscreen];
    mqlarr.forEach(vars=>{
    vars.addListener(mediaquery);
    });
    mediaquery();
    function mediaquery(){
        if (mqltransform.matches){
            temp.style.left = "15px";
            light.style.left = "210px";
            cam.style.left  = "405px";
            air.style.left = "600px";
            devs.forEach(target=>{
                target.addEventListener("touchstart", touchStart);
                target.addEventListener("touchend", touchEnd);
                target.removeEventListener("touchend", touchLast);
            });
        }
        else {
            devs.forEach(target=>{
               target.removeEventListener("touchstart", touchStart);
               target.removeEventListener("touchend", touchEnd);
            });
            devs.forEach(target=>{
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
        temp.style.left = "unset";
        light.style.left = "unset";
        cam.style.left  = "unset";
        air.style.left = "unset";
        }
        }
        let startposx,startposy,endposx,endposy;
        function touchStart(touchdirect) {
        startposx = touchdirect.touches[0].clientX;
        startposy = touchdirect.touches[0].clientY;
        }
        function touchEnd(touchdirect){
        endposx = touchdirect.changedTouches[0].clientX;
        endposy = touchdirect.changedTouches[0].clientY;
        if (endposx > startposx && (Math.abs(startposx - endposx) > 25) && Math.abs(startposy - endposy) < 75){
        devs.forEach(aim=>{
        aim.removeEventListener("touchend", touchLast)});
        temp.style.left = "15px";
        light.style.left = "210px";
        cam.style.left  = "405px";
        air.style.left = "600px";
        }
        else if (endposx < startposx && (Math.abs(startposx - endposx) > 25)
        && Math.abs(startposy - endposy) < 75){
        temp.style.left = fwd * 1.25 + 15 + "px";
        light.style.left = fwd * 1.25 + 210 + "px";
        cam.style.left = fwd * 1.25 + 405 + "px";
        air.style.left = fwd * 1.25 + 600 + "px";
        if (mqlmediumscreen.matches || mqlsmallscreen.matches){
        devs.forEach(aim=>{
        aim.addEventListener("touchstart", touchStart);
        aim.addEventListener("touchend", touchLast)});
        }
        }
        }
        function touchLast(){
        if (endposx < startposx && (Math.abs(startposx - endposx) > 25)
        && Math.abs(endposy - startposy) < 75){
        temp.style.left = fwd * 2.5 + 15 + "px";
        light.style.left = fwd * 2.5 + 210 + "px";
        cam.style.left = fwd * 2.5 + 405 + "px";
        air.style.left = fwd * 2.5 + 600 + "px";
        devs.forEach(lastaim=>{
        lastaim.addEventListener("touchstart", touchStart);
        lastaim.addEventListener("touchend", touchTheLast)});
        }
        }
        function touchTheLast(){
        if (endposx > startposx && (Math.abs(startposx - endposx) > 25)
        && Math.abs(endposy - startposy) < 75){
        temp.style.left = fwd * 1.25 + 15 + "px";
        light.style.left = fwd * 1.25 + 210 + "px";
        cam.style.left = fwd * 1.25 + 405 + "px";
        air.style.left = fwd * 1.25 + 600 + "px";
        devs.forEach(finalaim=>{
        finalaim.addEventListener("touchend", touchLast);
        finalaim.removeEventListener("touchend", touchTheLast)});
        }
        }
        };
