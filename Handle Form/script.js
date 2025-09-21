function handleForm() {
    const login = document.getElementById('login').value;
    const remember = document.getElementById('remember').checked;

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Привет, ${login}! Я тебя ${remember ? 'запомнил' : 'не запомнил'}`;
    resultDiv.style.display = 'block';

    return false; // Отменяем отправку формы
}