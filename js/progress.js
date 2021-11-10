"use strict";

const circle = document.querySelector('.progect-ring__circle');
const percentage = document.querySelector('.percentage');
const circleContainer = document.querySelector('.container');
const radius = circle.r.baseVal.value;
const circumference = 2* Math.PI * radius;

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = circumference;

function setProgress(percent){
    const offset = circumference - percent / 100 * circumference;
    circle.style.strokeDashoffset = offset;
    percentage.innerHTML = `${percent}%`;
}

function createCircle(){
    const circle = document.createElement('div');
    
}
setProgress(75);