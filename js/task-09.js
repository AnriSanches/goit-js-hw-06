/*
*Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.

<div class="widget">
  <p>Background color: <span class="color">-</span></p>
  <button type="button" class="change-color">Change color</button>
</div>
Для генерации случайного цвета используй функцию getRandomHexColor.
*/

const refs = {
  body: document.body,
  btn: document.querySelector('.change-color'),
  span: document.querySelector('.color'),
};

refs.btn.addEventListener('click', onClickBtn);

function onClickBtn () {
  refs.span.textContent = `${getRandomHexColor()}`;
  refs.body.style.backgroundColor = getRandomHexColor()
}

console.log(refs.span);

// console.log(getRandomHexColor());
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
