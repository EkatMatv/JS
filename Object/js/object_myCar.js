"use strict";
let btn = document.getElementById("btn");
let output = document.getElementById("output");
let myCarSelect = document.getElementById("myCar");
let distance = document.getElementById("distance");
let btnTime = document.getElementById("btnTime");
let outputTime = document.getElementById("outputTime");
let clear = document.getElementById("clear");
function Car(brand, model, year, speed) {
    return {
        brand: brand,
        model: model,
        year: year,
        speed: speed,        
    }    
}
function printCar(myCar) {
    return `Производитель: ${myCar.brand},
    Модель: ${myCar.model},
    Год выпуска: ${myCar.year} г.,
    Средняя скорость: ${myCar.speed} км/ч`;
}
function distanceTime(car, distance){
let distTime = distance / car.speed;
if(distTime > 4) {
    if(distTime%4==0)
        {
            let distTimeWithRelax = Math.floor(distTime/4) + distTime - 1;
            return distTimeWithRelax;
        }
        else {
            let distTimeWithRelax = Math.floor(distTime/4) + distTime;
            return distTimeWithRelax;
        }
} else {
    return distTime;
}
}
function separateIntegerAndFraction(number) {    
    const parts = number.toString().split('.');   
    const integerPart = parts[0];     
    const fractionPart = parts.length > 1 ? parts[1] : '00';     
    return `${integerPart} ч. ${fractionPart} мин.`;    
}
function clearFields(mytime) {
    mytime.hours = 0;
    mytime.minutes = 0;
    mytime.seconds = 0;
    return mytime; 
}
const cars = {
    "Corolla": Car("Toyota", "Corolla", 2020, 100),
    "Camry": Car("Toyota", "Camry", 2020, 120),
    "RAV4": Car("Toyota", "RAV4", 2010, 90),
    "Land Cruiser": Car("Toyota", "Land Cruiser", 2015, 110),
    "Mazda2": Car("Mazda", "Mazda2", 2010, 100),
    "Mazda6": Car("Mazda", "Mazda6", 2015, 120),
    "CX-5": Car("Mazda", "CX-5", 2019, 130),
    "Accord": Car("Honda", "Accord", 2018, 110),
    "Ballade": Car("Honda", "Ballade", 2015, 90),
    "X-Trail": Car("Nissan", "X-Trail", 2017, 100),
    "Qashqai": Car("Nissan", "Qashqai", 2019, 110),
    "Pathfinder": Car("Nissan", "Pathfinder", 2020, 120)   
};

btn.addEventListener("click", function () {   
    let selectedCar = myCarSelect.value;    
    if (cars[selectedCar]) {
        output.innerText = printCar(cars[selectedCar]);
    } else {
        output.innerText = "Выберите машину.";
    }
    btnTime.addEventListener("click", function () {        
        let dist = parseInt(distance.value);
        let distanceTime1 = distanceTime(cars[selectedCar], dist);
        // outputTime.innerText = `Время в пути: ${distanceTime1.toFixed(2)} ч.`;
        outputTime.innerText = separateIntegerAndFraction(distanceTime1.toFixed(2));
    clear.addEventListener("click", function () {
        output.innerText = "";
        outputTime.innerText = "";
        distance.value = "";
        });
    });
});
