'use strict';

const STARTBTN = document.querySelector('.startBtn');
const STOPBTN = document.querySelector('.stopBtn');
const RESETBTN = document.querySelector('.resetBtn');
let intervalID;
let outputTime = document.querySelector('.outputTime');
let startTime = 0;

outputTime.textContent = startTime;

STARTBTN.addEventListener('click', function(){
    intervalID = setInterval(startTheTime, 1000);
});

STOPBTN.addEventListener('click', function(){
    clearInterval(intervalID);
});

RESETBTN.addEventListener('click', function(){
    startTime = 0;
    outputTime.textContent = startTime;
});

function startTheTime(){
    startTime += 1;
    outputTime.textContent = startTime;
}