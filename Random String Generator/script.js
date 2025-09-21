function generateString() {
            const lengthInput = document.getElementById('length');
            const digitsCheckbox = document.getElementById('digits');
            const uppercaseCheckbox = document.getElementById('uppercase');
            const lowercaseCheckbox = document.getElementById('lowercase');
            const resultField = document.getElementById('result');
            const lengthError = document.getElementById('length-error');
            const charsError = document.getElementById('chars-error');
           
            lengthError.style.display = 'none';
            charsError.style.display = 'none';
            
            const length = parseInt(lengthInput.value);
            const useDigits = digitsCheckbox.checked;
            const useUppercase = uppercaseCheckbox.checked;
            const useLowercase = lowercaseCheckbox.checked;            
            if (length < 1 || length > 1000 || isNaN(length)) {
                lengthError.style.display = 'block';
                return;
            }
            
            if (!useDigits && !useUppercase && !useLowercase) {
                charsError.style.display = 'block';
                return;
            }
            
            let charset = '';
            if (useDigits) charset += '0123456789';
            if (useUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            if (useLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
            
            let result = '';
            for (let i = 0; i < length; i++) {
                const randomIndex = Math.floor(Math.random() * charset.length);
                result += charset[randomIndex];
            }
            
            resultField.textContent = result;
        }
        window.onload = generateString;