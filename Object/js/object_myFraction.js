"use strict";
let numerator = document.getElementById("numerator");
let denominator = document.getElementById("denominator");
let btn = document.getElementById("btn");
let output = document.getElementById("output");
let numerator1 = document.getElementById("numerator1");
let denominator1 = document.getElementById("denominator1");
let btn1 = document.getElementById("btn1");
let output1 = document.getElementById("output1");
let btn2 = document.getElementById("btn2");
let operationFraction = document.getElementById("operationFraction");
let clear = document.getElementById("clear");
function Fraction(numerator, denominator) {
    return {
        numerator: numerator,
        denominator: denominator,
    }
}

function displayFraction(fraction) {    
   return `
        <math>
            <mrow> 
                <mo>(</mo>
                <mfrac>
                    <mi>${fraction.numerator}</mi>
                    <mi>${fraction.denominator}</mi>
                </mfrac>
                <mo>)</mo>
            </mrow>
        </math>
    `;    
}
function displayFractionInteger(fraction) {
    if (fraction.numerator > fraction.denominator) {
        let integer = Math.floor(fraction.numerator / fraction.denominator);
        let numeratorNew = fraction.numerator % fraction.denominator;
        let denominatorNew = fraction.denominator;
        return `       
            
            <span class="integer">${integer}</span>
                        
            <math>
                <mrow>
                    <mo>(</mo>
                    <mfrac>
                        <mi>${numeratorNew}</mi>
                        <mi>${denominatorNew}</mi>
                    </mfrac>
                    <mo>)</mo>
                </mrow>
            </math>
        `;
    }
    else {
        return displayFraction(fraction);
    }
}
function summaFraction(fraction1, fraction2) {
    if (fraction1.denominator==fraction2.denominator){
        let numeratorNew = fraction1.numerator + fraction2.numerator;
        let denominatorNew = fraction1.denominator;
        return Fraction(numeratorNew, denominatorNew);
    }
    else{
    let numeratorNew = fraction1.numerator * fraction2.denominator + fraction2.numerator * fraction1.denominator;
    let denominatorNew =  (fraction1.denominator * fraction2.denominator);
    return Fraction(numeratorNew, denominatorNew);
}
}
function subtractionFraction(fraction1, fraction2) {
    if (fraction1.denominator==fraction2.denominator){
        let numeratorNew = fraction1.numerator - fraction2.numerator;
        let denominatorNew = fraction1.denominator;
        return Fraction(numeratorNew, denominatorNew);
    }
    else{
    let numeratorNew = fraction1.numerator * fraction2.denominator - fraction2.numerator * fraction1.denominator;
    let denominatorNew =  (fraction1.denominator * fraction2.denominator);
    return Fraction(numeratorNew, denominatorNew);
}
}
function multiplicationFraction(fraction1, fraction2) {
    let numeratorNew = fraction1.numerator * fraction2.numerator;
    let denominatorNew =  (fraction1.denominator * fraction2.denominator);
    return Fraction(numeratorNew, denominatorNew);
}
function divisionFraction(fraction1, fraction2) {
    let numeratorNew = fraction1.numerator * fraction2.denominator;
    let denominatorNew =  (fraction1.denominator * fraction2.numerator);
    return Fraction(numeratorNew, denominatorNew);
}
function displayOperationFraction(fraction1, fraction2, result, operation) {    
    return `${displayFraction(fraction1)}` +
    `${operation}${displayFraction(fraction2)}` +
    `= ${displayFraction(result)}`;
} 
        
function displayOperationFraction1(fraction1, fraction2, result, result1, operation) {
    console.log(result.numerator);
    if (Math.abs(result.numerator) === Math.abs(result.denominator)){
        return `${displayOperationFraction(fraction1, fraction2, result, operation)} = 1`;}
    
    if (result.numerator === 0) {
        return `${displayOperationFraction(fraction1, fraction2, result, operation)} = 0`;}      
       
    if (result.denominator===0){
        return `Деление на ноль невозможно`;
    }
    if (result.denominator == 1) {
        return `${displayOperationFraction(fraction1, fraction2, result, operation)}` +
        `= ${result.numerator}`;
        }
        else if (Math.abs(result.numerator)==Math.abs(result1.numerator) && Math.abs(result.denominator)==Math.abs(result1.denominator)&&Math.abs(result.denominator != 1)&&result.numerator < result.denominator) {
            return `${displayOperationFraction(fraction1, fraction2, result, operation)}`;}
            else if (Math.abs(result.numerator)==Math.abs(result1.numerator) && Math.abs(result.denominator)==Math.abs(result1.denominator)&&result.numerator > result.denominator) {
                return `${displayOperationFraction(fraction1, fraction2, result, operation)} = ${displayFractionInteger(result)}`;}

            else if (result1.denominator == 1) {
                return `${displayOperationFraction(fraction1, fraction2, result, operation)}` +
                `=  ${displayFraction(result1)} = ${result1.numerator}`;
            }
            else if (Math.abs(result.numerator)!=Math.abs(result1.numerator) || Math.abs(result.denominator)!=Math.abs(result1.denominator)&&Math.abs(result1.denominator !== 1)){
            return `${displayOperationFraction(fraction1, fraction2, result, operation)}` +
            `= ${displayFractionInteger(result1)}`;
            }
}
function reductionFraction(fraction) {
    if (fraction.numerator == fraction.denominator) {
        return Fraction(fraction.numerator, fraction.denominator);
    }
    if (fraction.numerator === 0) {
        return Fraction(fraction.numerator, fraction.denominator);
    }    
    if (fraction.numerator > fraction.denominator) {
       let gcd = findGCD(fraction.numerator, fraction.denominator);        
        let numeratorNew = fraction.numerator / gcd;
        let denominatorNew = fraction.denominator / gcd;
        return Fraction(numeratorNew, denominatorNew);        
    }
    if (fraction.numerator < fraction.denominator) {
        let gcd = findGCD(fraction.denominator, fraction.numerator);
        let numeratorNew = fraction.numerator / gcd;
        let denominatorNew = fraction.denominator / gcd;
        return Fraction(numeratorNew, denominatorNew);        
    }    
}
function findGCD(a, b) {
    if (b === 0) {
        return a;    }
    return findGCD(b, a % b);
}
function clearFields(fraction) {
    fraction.numerator = 0;
    fraction.denominator = 0;}

btn.addEventListener("click", function () {
    let numeratorValue = parseInt(numerator.value);
    let denominatorValue = parseInt(denominator.value);
    let fraction = Fraction(numeratorValue, denominatorValue);
    if (denominatorValue === 0) {
        output.innerHTML = "Деление на ноль невозможно";
        return;}

    output.innerHTML = displayFraction(fraction);
    btn1.addEventListener("click", function () {
        let numeratorValue1 = parseInt(numerator1.value);
        let denominatorValue1 = parseInt(denominator1.value);
        let fraction1 = Fraction(numeratorValue1, denominatorValue1);
        if (denominatorValue1 === 0) {
            output1.innerHTML = "Деление на ноль невозможно";
            return;}
        output1.innerHTML = displayFraction(fraction1);
        btn2.addEventListener("click", function () {            
            let summaFractionValue = summaFraction(fraction, fraction1); 
            let reductionFractionValue = reductionFraction(summaFractionValue);           
            let subtractionFractionValue = subtractionFraction(fraction, fraction1);
            let reductionFractionValue1 = reductionFraction(subtractionFractionValue);
            let multiplicationFractionValue = multiplicationFraction(fraction, fraction1);
            let reductionFractionValue2 = reductionFraction(multiplicationFractionValue);
            let divisionFractionValue = divisionFraction(fraction, fraction1);
            let reductionFractionValue3 = reductionFraction(divisionFractionValue);
            operationFraction.innerHTML =
            `Сложение: ${displayOperationFraction1(fraction, fraction1, summaFractionValue, reductionFractionValue, "+")};<br>` +
            `Вычитание: ${displayOperationFraction1(fraction, fraction1, subtractionFractionValue, reductionFractionValue1, "-")};<br>` +
            `Умножение: ${displayOperationFraction1(fraction, fraction1, multiplicationFractionValue, reductionFractionValue2, "*")};<br>` +
            `Деление: ${displayOperationFraction1(fraction, fraction1, divisionFractionValue, reductionFractionValue3, "/")};`;
            clear.addEventListener("click", function () {
                clearFields(fraction);
                clearFields(fraction1);
                output.innerHTML = "";
                output1.innerHTML = "";
                operationFraction.innerHTML = "";
            });
        });
    });
});