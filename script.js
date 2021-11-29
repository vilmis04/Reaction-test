const MIN_SIZE = 100;
const MAX_SIZE = 400;
const MAX_WAIT = 2000; //in miliseconds, i.e., 3s = 3000ms;

const trig = document.querySelector(".btn");
const duration = document.querySelector("span");
const startBtn = document.querySelector(".start");

let start;

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

function startTimer () {
    start = new Date();
}

function displayTimer() {
    let end = new Date();
    duration.textContent = (end.getTime() - start.getTime())/1000 + " s";
}

function cooldownTime() {
    trig.style.width = "0";
    displayTimer();
    setTimeout(triggerChange, Math.round(Math.random()*MAX_WAIT));
}

function triggerChange() {
    setSize();
    setColor();
    setPosition();
    setShape();
    startTimer();
}

startBtn.addEventListener("click", triggerChange);
trig.addEventListener("click", cooldownTime);
