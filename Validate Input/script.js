function ValidateInput(input) {
    const error = document.getElementById('error');
    const result = document.getElementById('result');
    const originalValue = input.value;
    
    const cleanedValue = originalValue.replace(/[0-9]/g, '');    
    const hadNumbers = originalValue !== cleanedValue;    
    input.value = cleanedValue;    
    error.style.display = hadNumbers ? 'block' : 'none';    
    result.textContent = cleanedValue || '-';
}