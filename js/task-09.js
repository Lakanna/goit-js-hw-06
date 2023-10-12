function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const btnColor = document.querySelector('.change-color');

const spanColor = document.querySelector('.color');

const body = document.querySelector('body');

console.log(btnColor);

btnColor.addEventListener('click', handlerClick);

function handlerClick(event) {

  let color = getRandomHexColor();

  body.style.backgroundColor = color;

  spanColor.textContent = color;
};