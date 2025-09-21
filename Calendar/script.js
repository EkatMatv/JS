function generateCalendar() {
            const monthSelect = document.getElementById('month');
            const yearInput = document.getElementById('year');
            const errorDiv = document.getElementById('error-message');
            const calendarDiv = document.getElementById('calendar');
            
            errorDiv.textContent = '';
            calendarDiv.innerHTML = '';
            
            const month = parseInt(monthSelect.value);
            const year = parseInt(yearInput.value);
           
            if (!month || !year) {
                errorDiv.textContent = 'Пожалуйста, выберите месяц и введите год';
                return;
            }
            
            if (year < 1900 || year > 2100) {
                errorDiv.textContent = 'Год должен быть между 1900 и 2100';
                return;
            }
            
            createCalendar(month, year);
        }
        
        function createCalendar(month, year) {
            const calendarDiv = document.getElementById('calendar');
           
            const monthNames = [
                'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
                'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
            ];
            
            const dayNames = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
           
            const header = document.createElement('div');
            header.className = 'calendar-header';
            header.textContent = `${monthNames[month - 1]} ${year} года`;
            calendarDiv.appendChild(header);
           
            const table = document.createElement('table');
            
            let headerRow = document.createElement('tr');
            dayNames.forEach(day => {
                const th = document.createElement('th');
                th.textContent = day;
                headerRow.appendChild(th);
            });
            table.appendChild(headerRow);
            
            const firstDay = new Date(year, month - 1, 1);
            const lastDay = new Date(year, month, 0);
            const daysInMonth = lastDay.getDate();
           
            let startingDay = firstDay.getDay();
           
            if (startingDay === 0) startingDay = 7;
            
            const today = new Date();
            const isCurrentMonth = today.getMonth() + 1 === month && today.getFullYear() === year;
            
           
            let date = 1;
            for (let i = 0; i < 6; i++) {
                
                if (date > daysInMonth) break;
                
                const row = document.createElement('tr');
                
                for (let j = 1; j <= 7; j++) {
                    const cell = document.createElement('td');
                    
                    if (i === 0 && j < startingDay) {
                        
                        cell.textContent = '';
                    } else if (date > daysInMonth) {
                       
                        cell.textContent = '';
                    } else {
                       
                        cell.textContent = date;
                       
                        if (j === 6 || j === 7) {
                            cell.classList.add('weekend');
                        }
                        
                        if (isCurrentMonth && date === today.getDate()) {
                            cell.classList.add('today');
                        }
                        
                        date++;
                    }
                    
                    row.appendChild(cell);
                }
                
                table.appendChild(row);
            }
            
            calendarDiv.appendChild(table);
        }
       
        document.getElementById('year').value = new Date().getFullYear();