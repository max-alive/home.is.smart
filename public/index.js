    window.onload = () =>{
    "use strict";
    const list = document.getElementById("headerlist");
    const burger = document.getElementById("burger");
    burger.addEventListener("click",()=>{
        if (list.className === "headerlist"){
            list.className += " adaptheader";
        }
        else {
            list.className = "headerlist";
        }
    });
    const temp = document.getElementById("smallpaneltemp");
    const light = document.getElementById("smallpanellight");
    const cam = document.getElementById("smallpanelcam");
    const air = document.getElementById("smallpanelair");
    const devs = [temp, light, cam, air];
    const windowsize1340 = window.matchMedia("(max-width: 1339px)");
    const windowsize910 = window.matchMedia("(max-width: 909px)");
    const windowsize640 = window.matchMedia("(max-width: 640px)");
    const mqltransform = window.matchMedia("(max-width: 1210px)");
    const mqlmediumscreen = window.matchMedia("(max-width: 1090px) AND (min-width: 641px)");
    const mqlsmallscreen = window.matchMedia("(max-width: 551px)");
    const mqlarr = [mqltransform, mqlmediumscreen, mqlsmallscreen];
    let startposx,startposy,endposx,endposy;
    const touchStart = touchdirect => {
    startposx = touchdirect.touches[0].clientX;
    startposy = touchdirect.touches[0].clientY;
    };
    const touchEnd = touchdirect => {
        endposx = touchdirect.changedTouches[0].clientX;
        endposy = touchdirect.changedTouches[0].clientY;
        if (endposx > startposx && (Math.abs(startposx - endposx) > 25)
        && Math.abs(startposy - endposy) < 75){
        devs.forEach(aim=>{
            aim.removeEventListener("touchend", touchLast)});
            temp.style.left = "15px";
            light.style.left = "210px";
            cam.style.left  = "405px";
            air.style.left = "600px";
            }
            else if (endposx < startposx && (Math.abs(startposx - endposx) > 25)
                && Math.abs(startposy - endposy) < 75){
                temp.style.left = -210 * 1.25 + 15 + "px";
                light.style.left = -210 * 1.25 + 210 + "px";
                cam.style.left = -210 * 1.25 + 405 + "px";
                air.style.left = -210 * 1.25 + 600 + "px";
                if (mqlmediumscreen.matches || mqlsmallscreen.matches){
                    devs.forEach(aim=>{
                        aim.addEventListener("touchstart", touchStart);
                        aim.addEventListener("touchend", touchLast)});
                }
            }
        };
        const touchLast = () => {
        if (endposx < startposx && (Math.abs(startposx - endposx) > 25)
        && Math.abs(endposy - startposy) < 75){
            temp.style.left = -210 * 2.5 + 15 + "px";
            light.style.left = -210 * 2.5 + 210 + "px";
            cam.style.left = -210 * 2.5 + 405 + "px";
            air.style.left = -210 * 2.5 + 600 + "px";
            devs.forEach(lastaim=>{
            lastaim.addEventListener("touchstart", touchStart);
            lastaim.addEventListener("touchend", touchTheLast)});
            }
        };
        const mediaquery = () => {
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
                target.addEventListener("wheel",direct=>{
                if (direct.deltaY > 0){
                temp.style.top = -210 + 20 + "px";
                light.style.top = -210 + 150 + "px";
                cam.style.top = -210 + 280 + "px";
                air.style.top = -210 + 410 + "px";}
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
        };
        mediaquery();
        mqlarr.forEach(vars=>{
            vars.addListener(mediaquery);
        });
        const touchTheLast = () => {
        if (endposx > startposx && (Math.abs(startposx - endposx) > 25)
        && Math.abs(endposy - startposy) < 75){
        temp.style.left = -210 * 1.25 + 15 + "px";
        light.style.left = -210 * 1.25 + 210 + "px";
        cam.style.left = -210 * 1.25 + 405 + "px";
        air.style.left = -210 * 1.25 + 600 + "px";
        devs.forEach(finalaim=>{
        finalaim.addEventListener("touchend", touchLast);
        finalaim.removeEventListener("touchend", touchTheLast)});
        }
        };
        const favscenarios = document.getElementsByClassName("favscenarios");
        const rightarrow = document.getElementById("rightarrow");
        const leftarrow = document.getElementById("leftarrow");
        if (favscenarios.length >= 10){
            rightarrow.style.display = "block";
            leftarrow.style.display = "block";
        }
        let isActive;
        rightarrow.addEventListener("click",()=>{
        if (windowsize910.matches){
        for (let i = 0; i < 3; i++) {
        favscenarios[i].style.display = "none";
        }
        rightarrow.addEventListener("click", rightClicktotheEnd);
        isActive = true;
        leftarrow.style.opacity = "1";
        leftarrow.style.cursor = "pointer";
        }

        else if (windowsize1340.matches){
        rightarrow.style.opacity = "0.33";
        leftarrow.style.opacity = "1";
        leftarrow.style.cursor = "pointer";
        rightarrow.style.cursor = "unset";
        for (let i = 0; i < 6; i++) {
        favscenarios[i].style.display = "none";
        }
        }
        else{
        rightarrow.style.opacity = "0.33";
        leftarrow.style.opacity = "1";
        leftarrow.style.cursor = "pointer";
        rightarrow.style.cursor = "unset";
        for (let i = 0; i < 9; i++) {
        favscenarios[i].style.display = "none";
        }
        }
        });
        const rightClicktotheEnd = () =>{
        for (let i = 3; i < 6; i++) {
        favscenarios[i].style.display = "none";
        }
        rightarrow.removeEventListener("click", rightClicktotheEnd);
        isActive = false;
        rightarrow.style.opacity = "0.33";
        rightarrow.style.cursor = "unset";
        };

        leftarrow.addEventListener("click",()=>{
        if (windowsize910.matches){
        if (isActive === false){
        for (let i = 3; i < 6; i++) {
        favscenarios[i].style.display = "inline-block";
        }
        leftarrow.addEventListener("click", leftClicktotheEnd);
        rightarrow.addEventListener("click", rightClicktotheEnd);
        rightarrow.style.opacity = "1";
        rightarrow.style.cursor = "pointer";
        }
        else {
        leftClicktotheEnd();
        }
        }
        else {
        for (let i = 0; i < favscenarios.length; i++) {
        favscenarios[i].style.display = "inline-block";
        }
        leftarrow.style.opacity = "0.33";
        rightarrow.style.opacity = "1";
        leftarrow.style.cursor = "unset";
        rightarrow.style.cursor = "pointer";
        }
        });
        const leftClicktotheEnd = () =>{
        for (let i = 0; i < favscenarios.length; i++) {
        favscenarios[i].style.display = "inline-block";
        }
        leftarrow.removeEventListener("click",leftClicktotheEnd);
        rightarrow.removeEventListener("click", rightClicktotheEnd);
        leftarrow.style.opacity = "0.33";
        leftarrow.style.cursor = "unset";
        rightarrow.style.opacity = "1";
        rightarrow.style.cursor = "pointer";
        };
        const nestedscenarios = document.getElementById("nestedscenarios");
        Array.prototype.forEach.call(favscenarios, favscenariosarg =>{
        favscenariosarg.addEventListener("touchstart", touchStart);
        });
        const firstTouch = touchend => {
        endposx = touchend.changedTouches[0].clientX;
        endposy = touchend.changedTouches[0].clientY;
        if (endposx < startposx
        && (Math.abs(startposy - endposy) < 75) && windowsize640.matches) {
        nestedscenarios.style.marginLeft = "-205px";
        Array.prototype.forEach.call(favscenarios, favscenariosarg =>{
            favscenariosarg.addEventListener("touchend", secondTouch);
        });
        }
        Array.prototype.forEach.call(favscenarios, favscenariosarg =>{
            favscenariosarg.removeEventListener("touchend", thirdTouch);
        });
        };
        Array.prototype.forEach.call(favscenarios, favscenariosarg =>{
            favscenariosarg.addEventListener("touchend", firstTouch);
        });
        const secondTouch = touchend =>{
        endposx = touchend.changedTouches[0].clientX;
        endposy = touchend.changedTouches[0].clientY;
        if (endposx < startposx && (Math.abs(startposx - endposx) > 25)
        && (Math.abs(startposy - endposy) < 75) && windowsize640.matches){
        nestedscenarios.style.marginLeft = -205 * 2 + "px";
        Array.prototype.forEach.call(favscenarios, favscenariosarg =>{
            favscenariosarg.removeEventListener("touchend", firstTouch);
        });
        Array.prototype.forEach.call(favscenarios, favscenariosarg =>{
            favscenariosarg.addEventListener("touchend", thirdTouch);
        });
        }
        else if (endposx > startposx && (Math.abs(startposx - endposx) > 25)
        && (Math.abs(startposy - endposy) < 75) && windowsize640.matches){
        nestedscenarios.style.marginLeft = "0px";
        Array.prototype.forEach.call(favscenarios, favscenariosarg =>{
                favscenariosarg.addEventListener("touchend", firstTouch);
        });
        }
        Array.prototype.forEach.call(favscenarios, favscenariosarg =>{
            favscenariosarg.removeEventListener("touchend", secondTouch);
        });
        };
        const thirdTouch = touchend =>{
        endposx = touchend.changedTouches[0].clientX;
        endposy = touchend.changedTouches[0].clientY;
        if (endposx < startposx && (Math.abs(startposx - endposx) > 25)
        && (Math.abs(startposy - endposy) < 75) && windowsize640.matches){
        nestedscenarios.style.marginLeft = -205 * 3 + "px";
        Array.prototype.forEach.call(favscenarios, favscenariosarg =>{
            favscenariosarg.addEventListener("touchend", fourthTouch);
        });
        }
        else if (endposx > startposx && (Math.abs(startposx - endposx) > 25)
        && (Math.abs(startposy - endposy) < 75) && windowsize640.matches){
        nestedscenarios.style.marginLeft = "-205px";
        Array.prototype.forEach.call(favscenarios, favscenariosarg =>{
            favscenariosarg.addEventListener("touchend", secondTouch);
        });
        }
        Array.prototype.forEach.call(favscenarios, favscenariosarg =>{
            favscenariosarg.removeEventListener("touchend", thirdTouch);
        });
        };
        const fourthTouch = touchend =>{
        endposx = touchend.changedTouches[0].clientX;
        endposy = touchend.changedTouches[0].clientY;
        if (endposx < startposx && (Math.abs(startposx - endposx) > 25)
        && (Math.abs(startposy - endposy) < 75) && windowsize640.matches){
        nestedscenarios.style.marginLeft = -205 * 4 + "px";
        Array.prototype.forEach.call(favscenarios, favscenariosarg =>{
            favscenariosarg.addEventListener("touchend", fifthTouch);
        });
        }
        else if (endposx > startposx && (Math.abs(startposx - endposx) > 25)
        && (Math.abs(startposy - endposy) < 75) && windowsize640.matches) {
        nestedscenarios.style.marginLeft = -205 * 2 + "px";
        Array.prototype.forEach.call(favscenarios, favscenariosarg =>{
            favscenariosarg.addEventListener("touchend", thirdTouch);
        });
        }
        Array.prototype.forEach.call(favscenarios, favscenariosarg =>{
            favscenariosarg.removeEventListener("touchend", fourthTouch);
        });
        };
        const fifthTouch = touchend =>{
        endposx = touchend.changedTouches[0].clientX;
        endposy = touchend.changedTouches[0].clientY;
        if (endposx < startposx && (Math.abs(startposx - endposx) > 25)
        && (Math.abs(startposy - endposy) < 75) && windowsize640.matches){
        nestedscenarios.style.marginLeft = -205 * 5 + "px";
        Array.prototype.forEach.call(favscenarios, favscenariosarg =>{
            favscenariosarg.addEventListener("touchend", sixthTouch);
        });
        }
        else if (endposx > startposx && (Math.abs(startposx - endposx) > 25)
        && (Math.abs(startposy - endposy) < 75) && windowsize640.matches) {
        nestedscenarios.style.marginLeft = -205 * 3 + "px";
        Array.prototype.forEach.call(favscenarios, favscenariosarg =>{
            favscenariosarg.addEventListener("touchend", fourthTouch);
        });
        }
        Array.prototype.forEach.call(favscenarios, favscenariosarg =>{
            favscenariosarg.removeEventListener("touchend", fifthTouch);
        });
        };
        const sixthTouch = touchend =>{
        endposx = touchend.changedTouches[0].clientX;
        endposy = touchend.changedTouches[0].clientY;
        if (endposx < startposx && (Math.abs(startposx - endposx) > 25)
        && (Math.abs(startposy - endposy) < 75) && windowsize640.matches){
        nestedscenarios.style.marginLeft = -205 * 6 + "px";
        Array.prototype.forEach.call(favscenarios, favscenariosarg =>{
            favscenariosarg.addEventListener("touchend", seventhTouch);
        });
        }
        else if (endposx > startposx && (Math.abs(startposx - endposx) > 25)
        && (Math.abs(startposy - endposy) < 75) && windowsize640.matches) {
        nestedscenarios.style.marginLeft = -205 * 4 + "px";
        Array.prototype.forEach.call(favscenarios, favscenariosarg =>{
            favscenariosarg.addEventListener("touchend", fifthTouch);
        });
        }
        Array.prototype.forEach.call(favscenarios, favscenariosarg =>{
            favscenariosarg.removeEventListener("touchend", sixthTouch);
        });
        };
        const seventhTouch = touchend =>{
        endposx = touchend.changedTouches[0].clientX;
        endposy = touchend.changedTouches[0].clientY;
        if (endposx < startposx && (Math.abs(startposx - endposx) > 25)
        && (Math.abs(startposy - endposy) < 75) && windowsize640.matches){
        nestedscenarios.style.marginLeft = -205 * 7 + "px";
        Array.prototype.forEach.call(favscenarios, favscenariosarg =>{
            favscenariosarg.addEventListener("touchend", eighthTouch);
        });
        }
        else if (endposx > startposx && (Math.abs(startposx - endposx) > 25)
        && (Math.abs(startposy - endposy) < 75) && windowsize640.matches) {
        nestedscenarios.style.marginLeft = -205 * 5 + "px";
        Array.prototype.forEach.call(favscenarios, favscenariosarg =>{
        favscenariosarg.addEventListener("touchend", sixthTouch);
        });
        }
        Array.prototype.forEach.call(favscenarios, favscenariosarg =>{
        favscenariosarg.removeEventListener("touchend", seventhTouch);
        });
        };
        const eighthTouch = touchend => {
        endposx = touchend.changedTouches[0].clientX;
        endposy = touchend.changedTouches[0].clientY;
        if (endposx > startposx && (Math.abs(startposx - endposx) > 25)
        && (Math.abs(startposy - endposy) < 75) && windowsize640.matches) {
        nestedscenarios.style.marginLeft = -205 * 6 + "px";
        Array.prototype.forEach.call(favscenarios, favscenariosarg =>{
            favscenariosarg.addEventListener("touchend", seventhTouch);
        });
        }
        };
        const mobilescenarios = () =>{
        if (!windowsize640.matches){
        nestedscenarios.style.marginLeft = "unset";
        }
        };
        mobilescenarios();
        windowsize640.addListener(mobilescenarios);
        };
