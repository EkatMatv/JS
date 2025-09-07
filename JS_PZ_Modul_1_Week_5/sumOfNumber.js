"use strict";

function sumOfNumber(numS) {
    if (numS < 0) {
        return "Введите неотрицательное число"; // Обработка отрицательного числа
    }
    if (numS === 0) {
        return 0; // Базовый случай
    } else {
        // Получаем последнюю цифру (остаток от деления на 10)
        const lastDigit = numS % 10;
        // Убираем последнюю цифру (целочисленное деление на 10)
        const remainingNumber = Math.floor(numS / 10);
        // Рекурсивный вызов с оставшимся числом
        return lastDigit + sumOfNumber(remainingNumber);
    }
}

let number4 = document.getElementById('number4');
        let btn3 = document.getElementById('btn3');
        let result4 = document.getElementById('result4');
        btn3.addEventListener('click', ()=>{
            const in4 = parseInt(number4.value);
            result4.innerHTML = sumOfNumber(in4);
        })

