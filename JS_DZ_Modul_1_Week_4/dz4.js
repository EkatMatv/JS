"use strict";
// 1. Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем 
// второе; 1 – если первое больше, чем второе; и 0 – если числа равны.
function comparison(a, b) {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    } else {
        return 0;
    }
}
console.log("Задание 1");
console.log(comparison(5, 10));
console.log(comparison(10, 5));
console.log(comparison(5, 5));

// 2. Написать функцию, которая вычисляет факториал переданного ей числа.

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n-1)
    }
}
console.log("Задание 2");
console.log("Факториал равен " + factorial(10));

// 3. Написать функцию, которая принимает три отдельные цифры и превращает их в одно 
// число. Например: цифры 1, 4, 9 превратятся в число 149.
function threeDigits(a, b, c) {
    return a * 100 + b * 10 + c;
}

console.log("Задание 3");
console.log("Объединение трех цифр " + threeDigits(1, 4, 9));

// 4. Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его 
// площадь. Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.
function squareArea(a, b) {
    if (b === undefined) {
        return a * a;
    } else {
        return a * b;
    }
}
console.log("Задание 4");
console.log(squareArea(5));
console.log(squareArea(5, 10));

// 5. Написать функцию, которая проверяет, является ли переданное ей число совершенным. 
// Совершенное число – это число, равное сумме всех своих собственных делителей.

function perfectNumber(a) {
    let sum = 0;    
    for (let i = 1; i < a; i++) {
        if (a % i === 0) {            
            sum += i;
        }
    }
    if (sum === a) {
        return true;
    } else {
        return false;
    }
}
console.log("Задание 5");
console.log(perfectNumber(6));
console.log(perfectNumber(10));

// 6. Написать функцию, которая принимает минимальное и максимальное значения для 
// диапазона, и выводит только те числа из диапазона, которые являются совершенными.
// Используйте написанную ранее функцию, чтобы узнавать,совершенное число или нет.
function perfectNumberRange(min, max) {
    for (let i = min; i <= max; i++) {
        if (perfectNumber(i)) {
            console.log(i);
        }
    }
}
console.log("Задание 6");
perfectNumberRange(1, 10000);

// 7. Написать функцию,которая принимает время (часы, минуты, секунды) и выводит его на
// экран в формате «чч:мм:сс». Если при вызове функции минуты и/или секунды не были
// переданы, то выводить их как 00.
function time(hours, minutes, seconds) {    
    if (minutes < 10 && minutes !== undefined) {
        minutes = "0" + minutes;
    }
    else if (minutes === undefined) {
        minutes = "00";
    }
    if (seconds < 10 && seconds !== undefined) {
        seconds = "0" + seconds;
    }
    else if (seconds === undefined) {
        seconds = "00";
    }
    if (hours < 10 && hours !== undefined) {
        hours = "0" + hours;
    }  
    return hours + ":" + minutes + ":" + seconds;
}
console.log("Задание 7");
console.log(time(2, 30, 45));
console.log(time(12, 8));
console.log(time(0, 0, 15));

// 8. Написать функцию, которая принимает часы, минуты и секунды и возвращает это время 
// в секундах.
function timeToSeconds(hours, minutes, seconds) {
    if (minutes === undefined) {
        minutes = 0;
    }
    if (seconds === undefined) {
        seconds = 0;
    }    
    return hours * 3600 + minutes * 60 + seconds;
}
console.log("Задание 8");
console.log(timeToSeconds(1, 30, 45));
console.log(timeToSeconds(12, 8));
console.log(timeToSeconds(0, 0, 15));

// 9. Написать функцию, которая принимает количество секунд, переводит их в часы, минуты 
// и секунды и возвращает в виде строки «чч:мм:сс».
function secondsToTime(seconds) {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds - hours * 3600) / 60);
    let seconds2 = seconds - hours * 3600 - minutes * 60;
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds2 < 10) {
        seconds2 = "0" + seconds2;
    }
    if (hours < 10) {
        hours = "0" + hours;
    }

    return hours + ":" + minutes + ":" + seconds2;
}
console.log("Задание 9");
console.log(secondsToTime(3331));

// 10. Написать функцию, которая считает разницу между датами. Функция принимает 6 
// параметров, которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс». 
// При выполнении задания используйте функции из предыдущих 2-х заданий: сначала обе даты
// переведите в секунды, узнайте разницу в секундах, а потом разницу переведите обратно
// в «чч:мм:сс».
function dateDifference(hours1, minutes1, seconds1, hours2, minutes2, seconds2) {
    let date1 = hours1 * 3600 + minutes1 * 60 + seconds1;
    let date2 = hours2 * 3600 + minutes2 * 60 + seconds2;
    let difference = Math.abs(date1 - date2);
    let hours = Math.floor(difference / 3600);
    let minutes = Math.floor((difference - hours * 3600) / 60);
    let seconds = difference - hours * 3600 - minutes * 60;
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds2 < 10) {
        seconds2 = "0" + seconds2;
    }
    if (hours < 10) {
        hours = "0" + hours;
    }
    return hours + ":" + minutes + ":" + seconds;
}
console.log("Задание 10");
console.log(dateDifference(12, 0, 0, 13, 0, 0));
console.log(dateDifference(12, 2, 0, 12, 0, 0));