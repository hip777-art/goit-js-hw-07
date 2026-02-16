function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

// 1. Выбираем DOM-элементы
const changeColorBtn = document.querySelector('.change-color');
const colorText = document.querySelector('.color');

// 2. Добавляем обработчик события
changeColorBtn.addEventListener('click', () => {
  const newColor = getRandomHexColor();

  // 3. Меняем цвет фона body
  document.body.style.backgroundColor = newColor;

  // 4. Отображаем текущий цвет в span.color
  colorText.textContent = newColor;
});
