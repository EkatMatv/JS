"use strict";
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n-1)
    }
}
let number = document.getElementById('number');
        let btn = document.getElementById('btn');
        let result = document.getElementById('result');
        btn.addEventListener('click', ()=>{
            const input = parseInt(number.value);
            // result.innerHTML = `Результат: ${factorial(input)}`;
            result.innerHTML = factorial(input);
        })