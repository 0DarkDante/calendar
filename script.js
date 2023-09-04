// Оголошення функції для оновлення календаря
function updateCalendar() {
  let currentYear = date.getFullYear();
  let currentMonth = date.getMonth();
  let currentDay = date.getDate();
  let currentDayOfWeek = date.getDay(); // День тижня (0 - неділя, 1 - понеділок, ..., 6 - субота)

  let daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate(); // Кількість днів у місяці

  let masMonth = [
    'Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень',
    'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'
  ];

  let masDaysOfWeek = [
    'Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'
  ];

  monthNow.textContent = masMonth[currentMonth];
  yearNow.textContent = currentYear;

  // Спочатку очищаємо список днів
  let daysList = document.querySelector('.days ul');
  daysList.innerHTML = '';

  // Додаємо дні тижня
  for (let i = 0; i < masDaysOfWeek.length; i++) {
    let li = document.createElement('li');
    li.textContent = masDaysOfWeek[i];
    daysList.appendChild(li);
  }

  // Додаємо відповідну кількість днів у список
  for (let i = 1; i <= daysInMonth; i++) {
    let li = document.createElement('li');
    li.textContent = i;
    daysList.appendChild(li);

    // Перевіряємо, чи це сьогоднішній день поточного місяця і додаємо клас "active" за необхідності
    if (currentMonth === date.getMonth() && currentYear === date.getFullYear() && i === currentDay) {
      li.classList.add('active');
    } else {
      li.classList.remove('active');
    }
  }
}

// Визначення змінних і подій після визначення функції
let liMas = document.querySelectorAll('li');
let monthNow = document.querySelector('.month'),
    yearNow = document.querySelector('.year');
let prevMonthLink = document.querySelector('.prev-month'),
    nextMonthLink = document.querySelector('.next-month');

let date = new Date();

// Обробники подій для посилань "Попередній місяць" і "Наступний місяць"
prevMonthLink.addEventListener('click', function (e) {
  date.setMonth(date.getMonth() - 1);
  updateCalendar();
  e.preventDefault(); // Забороняємо перехід за посиланням
});

nextMonthLink.addEventListener('click', function (e) {
  date.setMonth(date.getMonth() + 1);
  updateCalendar();
  e.preventDefault(); // Забороняємо перехід за посиланням
});

// Викликаємо функцію для відображення початкового календаря
updateCalendar();
