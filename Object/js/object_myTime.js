"use strict";

let hoursInp = document.getElementById("hours1");
let minutesInp = document.getElementById("minutes1");
let secondsInp = document.getElementById("seconds1");
let btn = document.getElementById("btn");
let output = document.getElementById("output");

let inputHours = document.getElementById("inputHours");
let inputMinutes = document.getElementById("inputMinutes");
let inputSeconds = document.getElementById("inputSeconds");
let btn2 = document.getElementById("btn2");
let newTime = document.getElementById("newTime");
let btn3 = document.getElementById("btn3");
function countDown() {        
    let dateNow = new Date();
    let hours = dateNow.getHours();
    let minutes = dateNow.getMinutes();
    let seconds = dateNow.getSeconds();
         
    document.getElementById("hours").innerText = hours < 10 ? '0' + hours : hours;
    document.getElementById("minutes").innerText = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById("seconds").innerText = seconds < 10 ? '0' + seconds : seconds;
} 
function startRealTime() { 
    countDown();   
    setInterval(countDown, 1000);     
}
function myTime(hours, minutes, seconds) {
    let mytime = {
        hours: hours,
        minutes: minutes,
        seconds: seconds
    };
    return mytime; 
}
function printMyTime(mytime) {
    return `${mytime.hours.toString().padStart(2, '0')}:`+
    `${mytime.minutes.toString().padStart(2, '0')}:` +
    `${mytime.seconds.toString().padStart(2, '0')}`;
}
function addSeconds(mytime, seconds) {
    mytime.seconds += seconds;    
    return mytime.seconds;   
}
function addMinutes(mytime, minutes) {
    mytime.minutes += minutes;   
    return mytime.minutes;    
}
function addHours(mytime, hours) {
    mytime.hours += hours;    
    return mytime.hours;    
}
function correctTime(mytime){
    if (mytime.seconds >= 60) {
        const newminutes = Math.floor(mytime.seconds / 60);
        mytime.seconds %= 60;
        addMinutes(mytime, newminutes);
    }
    if (mytime.minutes >= 60) {
        const newhours = Math.floor(mytime.minutes / 60);
        mytime.minutes %= 60;
        addHours(mytime, newhours);
    }
    if (mytime.hours >= 24) {
        mytime.hours %= 24;
    }
    return mytime;
}
function clearFields(mytime) {
    mytime.hours = 0;
    mytime.minutes = 0;
    mytime.seconds = 0;
    return mytime; 
}

startRealTime();
btn.addEventListener("click", function () {
    const hours = parseInt(hoursInp.value)||0;
    const minutes = parseInt(minutesInp.value)||0;
    const seconds = parseInt(secondsInp.value)||0;
    const mytime = correctTime(myTime(hours, minutes, seconds));    
    output.innerText = printMyTime(mytime);    

    btn2.addEventListener("click", function () {        
        const hoursChange = parseInt(inputHours.value)||0;
        const minutesChange = parseInt(inputMinutes.value)||0;
        const secondsChange = parseInt(inputSeconds.value)||0;        
        const sec = addSeconds(mytime, secondsChange);
        const min = addMinutes(mytime, minutesChange);
        const hour = addHours(mytime, hoursChange);        
        const mytimeNew = correctTime(myTime(hour, min, sec));        
        newTime.innerText = printMyTime(mytimeNew);
        btn3.addEventListener("click", function () {
            const mytimeClear = clearFields(mytime);
            output.innerText = printMyTime(mytimeClear);
            const mytimeClear1 = clearFields(mytimeNew);
            newTime.innerText = printMyTime(mytimeClear);
            document.getElementById("myForm").reset();
        });    
    });
    
});
