"use strict";


const circle = document.querySelectorAll('.progect-ring__circle');
const percentage = document.querySelectorAll('.percentage');
const professionName = document.querySelectorAll('.profession');
// const circleContainer = document.querySelector('.container');
const radius = 30;
// const radius = circle.r.baseVal.value;
const circumference = 2* Math.PI * radius;

for(let i = 0; i < circle.length; i++){
    //console.log(circle.item(i));
    circle.item(i).style.strokeDasharray = `${circumference} ${circumference}`;
    circle.item(i).style.strokeDashoffset = circumference;
}

function setProgress(index, percent){
    const offset = circumference - percent / 100 * circumference;
    circle.item(index).style.strokeDashoffset = offset;
    percentage.item(index).innerHTML = `${percent}%`;
}

for (let i = 0; i < 6; i++){
    setProgress(i, professions[i].score);
    // console.log(professionName.item(i));
    professionName.item(i).innerHTML = professions[i].profession;
}
