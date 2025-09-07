
Converter();
// 6. Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет 
// перевести: EUR, UAN или AZN, и получает в ответ соответствующую сумму.
async function Converter(){
    while(true){
    let usdQuant = prompt("Введите количество USD");
    let currency = prompt("Выберите в какую валюту хотите перевести: EUR, CNY или AZN");   
    const rateUsd = await rateCurrency("usd");    
    const rubQuant = rateUsd*usdQuant;
    console.log(rubQuant);
    switch(currency){
        case "EUR":
        case "eur":            
            const rateEur = await rateCurrency("eur");            
            alert(rubQuant / rateEur);
            break;
        case "CNY":
        case "cny":            
            const rateCny = await rateCurrency("cny");            
            alert(rubQuant / rateCny);
            break;
        case "AZN":
        case "azn":            
            const rateAzn = await rateCurrency("azn");           
            alert(rubQuant / rateAzn);
            break;
        default:
            alert("Вы ввели неверную валюту");
            break;
    }  
    let answer = prompt("Продолжить? (Yes/No)");
            if (answer === "No" || answer === "no") {
                break;
            }
        }
            alert("До свидания!");   
}
async function fetchData() {
    try {
    const response = await fetch("https://www.cbr-xml-daily.ru/daily_json.js"); 
    if (!response.ok) {
        throw new Error('Сеть ответила с ошибкой: ' + response.status);
    }   
    const data = await response.json();  
    return data; 
} catch (error) {
    console.error('Ошибка:', error);
}   
}
async function rateCurrency(currency) {    
        const localData = await fetchData();
        console.log(localData);
        switch (currency) {
            case "usd":
                const UsdData = localData.Valute.USD;
                return UsdData.Value;
                break;
            case "eur":
                const EurData = localData.Valute.EUR;
                return EurData.Value;
                break;
            case "cny":
                const CnyData = localData.Valute.CNY;
                return CnyData.Value;
                break;
            case "azn":
                const AznData = localData.Valute.AZN;
                return AznData.Value;
                break;
            defult:
            alert("Вы ввели неверную валюту");
            break;
            }           
}

