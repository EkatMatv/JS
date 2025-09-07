"use strict";
function pairOfBrackets(numB){
    if (numB === 0) {
        return "";
    } else {
        return "(" + pairOfBrackets(numB - 1) + ")";
    }
}
let number5 = document.getElementById('number5');
        let btn4 = document.getElementById('btn4');
        let result5 = document.getElementById('result5');
        btn4.addEventListener('click', ()=>{
            const in5 = parseInt(number5.value);
            result5.innerHTML = pairOfBrackets(in5);
        })