// function reverseNumber(num) {
//    let str = num.toString().split('').reverse().join('');  
//    return str;
// }
function reverseNumber(num) {
    let str = num.toString();  
    
    if (str.length == 0) {
        return '';
    }    
    return str.charAt(str.length - 1) + reverseNumber(str.slice(0, -1));
}
let number3 = document.getElementById('number3');
        let btn2 = document.getElementById('btn2');
        let result3 = document.getElementById('result3');
        btn2.addEventListener('click', ()=>{
            const in3 = parseInt(number3.value);
            result3.innerHTML = reverseNumber(in3);
        })