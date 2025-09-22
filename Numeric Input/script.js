const numberInput = document.getElementById('numberInput');
        
        function changeValue(change) {
            numberInput.value = parseInt(numberInput.value) + change;
        }        
        document.addEventListener('keydown', function(event) {
            if (event.key === 'ArrowUp') {
                changeValue(1);
                event.preventDefault();
            } else if (event.key === 'ArrowDown') {
                changeValue(-1);
                event.preventDefault();
            }
        });
        
        numberInput.addEventListener('keydown', function(event) {
            event.preventDefault();
        });