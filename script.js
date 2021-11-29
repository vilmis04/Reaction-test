const MIN_SIZE = 100;
const MAX_SIZE = 400;
const trig = document.querySelector(".btn");


function setSize() {
    const size = MIN_SIZE + Math.floor(Math.random()*MAX_SIZE);
    trig.style.width = size+"px";
    trig.style.height = size+"px";
}

function setColor() {
    let rgb = [255,255,255];
    trig.style.background = "rgb("+rgb.map(item => Math.round(item*Math.random())).join(",")+")";
}

function setPosition() {
    trig.style.top = Math.round((window.innerHeight-MAX_SIZE)*Math.random())+"px";
    trig.style.left = Math.round((window.innerWidth-MAX_SIZE)*Math.random())+"px";

}

function setShape() {
    trig.style.borderRadius = Math.round(Math.random())*50+"%";
}

function triggerChange() {
    setSize();
    setColor();
    setPosition();
    setShape();
    //setInterval();
}

trig.addEventListener("click", triggerChange);