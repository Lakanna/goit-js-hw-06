const inputSize = document.querySelector('#font-size-control');

const spanText = document.querySelector('#text');

console.log(inputSize);
console.log(spanText);

inputSize.addEventListener('input', handlerInput);

function handlerInput(event) {

    let inputValue = event.currentTarget.value;

    spanText.style.fontSize = `${inputValue}px`;

};

