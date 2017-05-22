var flame = document.querySelector("#flame");
var saw = document.querySelector("#saw");

var isTurned = false;
var turnAmt = 0;

var deviceType = '';

flame.addEventListener("transitionend", flameEndAni)
flame.addEventListener("webkitTransitionEnd", flameEndAni);

window.addEventListener('resize', checkForDeviceChange);


function flameEndAni(e) {
    console.log("flameEnd", e)
    // if(!isTurned) {
        turnAmt += 90;
        saw.style.transform = "rotate("
        +turnAmt+"deg)";
        saw.style.webkitTransform = "rotate("
        +turnAmt+"deg)";
        //isTurned = true;
    // } else {
    //     saw.style.transform = "rotate(0deg)";
    //     saw.style.webkitTransform = "rotate(0deg)";
    //     isTurned = false;
    // }

}

function checkForDeviceChange() {
    if (window.innerWidth > 1024) {
        deviceType = "large"
        saw.classList.add("large-saw");
    } else if (window.innerWidth <= 1024 && window.innerWidth >= 768){
        saw.classList.remove("large-saw");
        saw.classList.remove("small-saw");
        deviceType = "medium"
    } else {
        deviceType = "small"
        saw.classList.add("small-saw");
    }
}

console.log(flame, saw);