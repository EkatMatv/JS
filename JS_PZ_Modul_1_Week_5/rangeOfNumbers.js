"use strict";
function rangeOfNumbers(startNum, endNum) {
    if (startNum === endNum) {
        return [startNum];
    } else {
        let arr = rangeOfNumbers(startNum, endNum - 1);
        arr.push(endNum);
        return arr;
    }
}

function reverseOrder(startNum, endNum) {
    if (startNum === endNum) {
        return [startNum];
    } else {
        let arr = reverseOrder(startNum, endNum - 1);
        arr.unshift(endNum);
        return arr;
    }
}
let number1 = document.getElementById('number1');
        let number2 = document.getElementById('number2');
        let btn1 = document.getElementById('btn1');
        let result1 = document.getElementById('result1');
        let result2 = document.getElementById('result2');
        btn1.addEventListener('click', ()=>{
            const in1 = parseInt(number1.value);
            const in2 = parseInt(number2.value);
            result1.innerHTML = rangeOfNumbers(in1, in2);
            result2.innerHTML = reverseOrder(in1, in2);           
            
        })