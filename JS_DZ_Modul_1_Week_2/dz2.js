"use strict";
// Task1();
// Task2();
// Task3();
// Task4();
// Task5();
 Task6();
// Task7();
// Task8();
// Task9();
// Task10();
//localData();


// 1. Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), 
// подростком (12–18), взрослым (18_60) или пенсионером (60– ...).
function Task1(){
    let age = prompt("Введите ваш возраст");
    if(age >= 0 && age <= 2){
        alert("Вы ребенок");
    }else if(age >= 12 && age <= 18){
        alert("Вы подросток");
    }else if(age >= 18 && age <= 60){
        alert("Вы взрослый");
    }else if(age > 60){
        alert("Вы пенсионер");
    }else{
        alert("Вы не ввели возраст");
    }
}
// 2. Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на 
// этой клавише (1–!, 2–@, 3–# и т. д).
function Task2(){
    let num = prompt("Введите число от 0 до 9");
    switch(num){
        case "1":
            alert("!");
            break;
        case "2":
            alert("@");
            break;
        case "3":
            alert("#");
            break;
        case "4":
            alert("$");
            break;
        case "5":
            alert("%");
            break;
        case "6":
            alert("^");
            break;
        case "7":
            alert("&");
            break;
        case "8":
            alert("*");
            break;
        case "9":
            alert("(");
            break;
        case "0":
            alert(")");
            break;
        default:
            alert("Вы ввели неверное число");
            break;
    }
}
// 3. Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.
function Task3(){
    let num = prompt("Введите трехзначное число");
    let num1 = num[0];
    let num2 = num[1];
    let num3 = num[2];
    if(num1 == num2 || num1 == num3 || num2 == num3){
        alert("В числе есть одинаковые цифры");       
    }else{
        alert("В числе нет одинаковых цифр");
    }   
}
// 4. Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 
// 400, либо кратен 4 и при этом не кратен 100.
function Task4(){
    let year = prompt("Введите год");
    if(year % 400 == 0 || year % 4 == 0 && year % 100 != 0){
        alert("Год високосный");
    }else{
        alert("Год не високосный");
    }
}
// 5. Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.
function Task5(){
    let num = prompt("Введите пятизначное число");
    let num1 = num[0];
    let num2 = num[1];
    let num3 = num[2];
    let num4 = num[3];
    let num5 = num[4];
    (num1 == num5 && num2 == num4) ? alert("Число является палиндромом"):
    alert("Число не является палиндромом")
    // if(num1 == num5 && num2 == num4){
    //     alert("Число является палиндромом");
    // }else{
    //     alert("Число не является палиндромом");
    // }
}
// 6. Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет 
// перевести: EUR, UAN или AZN, и получает в ответ соответствующую сумму.
async function Task6(){
    let usd = prompt("Введите количество USD");
    let currency = prompt("Выберите в какую валюту хотите перевести: EUR, UAN или AZN");   
    switch(currency){
        case "EUR":
        case "eur":
            let eur = 0.93;        
            alert(usd * eur);
            break;
        case "UAN":
        case "uan":
            let uan = 7.5;
            alert(usd * uan);
            break;
        case "AZN":
        case "azn":
            let azn = 1.7;
            alert(usd * azn);
            break;
        default:
            alert("Вы ввели неверную валюту");
            break;
    }    
}
// 7. Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 
// 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.
function Task7(){
    let sum = prompt("Введите сумму покупки");
    if(sum >= 200 && sum <= 300){
        let rezult = sum-(sum * 3/100);
        alert("Сумма покупки с учетом 3% скидки = " + rezult);
    }else if(sum > 300 && sum <= 500){
        let rezult = sum-(sum * 5/100);
        alert("Сумма покупки с учетом 5% скидки = " + rezult);
    }else if(sum > 500){
        let rezult = sum-(sum * 7/100);
        alert("Сумма покупки с учетом 7% скидки = " + rezult);
    }else{
        alert("Вы ввели неверную сумму");
    }
}
// 8. Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая 
// окружность поместиться в указанный квадрат.
function Task8(){
    let circle = prompt("Введите длину окружности");
    let square = prompt("Введите периметр квадрата");
    let d=circle/Math.PI;
    let a=square/4;
    let rez= (d<=a) ? "Окружность поместится в квадрат" : "Окружность не поместится в квадрат";
    alert(rez);
}
// 9. Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный 
// ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов.
function Task9(){
    let answer1 = prompt("В каком году был создан JavaScript? Варианты ответа: 1995, 1996, 1997");
    let answer2 = prompt("В каком году был создан HTML? Варианты ответа: 1991, 1992, 1993");
    let answer3 = prompt("В каком году был создан  язык C++? Варианты ответа: 1982, 1985, 1987");
    let score = 0;
    if(answer1 == "1996"){
        score += 2;
    }    
    if(answer2 == "1991"){
        score += 2;
    }    
    if(answer3 == "1985"){
        score += 2;
    }    
    alert("Вы набрали " + score + " баллов");
}
// 10. Запросить дату (день, месяц, год) и вывести следующую за ней дату. Учтите возможность перехода 
// на следующий месяц, год, а также високосный год. 
function Task10(){
    let day = prompt("Введите день");
    let month = prompt("Введите месяц");
    let year = prompt("Введите год");
    day = parseInt(day);
    month = parseInt(month);
    year = parseInt(year);
    let nextDay = day + 1;
    let nextMonth = month;
    let nextYear = year;
    if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
        if(month == 2 && day == 28){
            nextDay = 1;
            nextMonth = 3;
        }
    }
    if(nextDay > 31){
        nextDay = 1;
        nextMonth += 1;
    }
    if(nextMonth > 12){
        nextMonth = 1;
        nextYear += 1;
    } 
    else{
        nextMonth = month;
        nextYear = year;
    }
    if(nextDay < 10 && nextMonth < 10){
        alert("Следующая дата: 0" + nextDay + ".0" + nextMonth + "." + nextYear);
    }
    else if(nextDay < 10){
        alert("Следующая дата: 0" + nextDay + "." + nextMonth + "." + nextYear);
    }
    else if(nextMonth < 10){
        alert("Следующая дата: " + nextDay + ".0" + nextMonth + "." + nextYear);
    }
    else{
    alert("Следующая дата: " + nextDay + "." + nextMonth + "." + nextYear);
}
}



 
      

