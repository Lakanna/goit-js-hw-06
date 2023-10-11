let counterValue = 0;

const spanCounter = document.querySelector('#value');

const btnClickDecrement = document.querySelector('button[data-action="decrement"]');

console.dir(btnClickDecrement);

console.dir(spanCounter);

const btnClickIncrement = document.querySelector('button[data-action="increment"]');

console.log(btnClickIncrement);

btnClickDecrement.addEventListener('klick', handlerClick);

function handlerClick(event) {
    counterValue -= 1;

    spanCounter.textContent = counterValue;
}


// console.log(counterValue);
