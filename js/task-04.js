let counterValue = 0;

const spanCounter = document.querySelector('#value');

const btnClickDecrement = document.querySelector('button[data-action="decrement"]');

const btnClickIncrement = document.querySelector('button[data-action="increment"]');

console.dir(btnClickDecrement);

console.log(spanCounter.textContent);

console.dir(btnClickIncrement);

btnClickDecrement.addEventListener('click', handlerClick);

function handlerClick() {
    counterValue -= 1;

    spanCounter.textContent = counterValue;

    console.log(spanCounter.textContent);
}

btnClickIncrement.addEventListener('click', handlerIncClick);

function handlerIncClick() {
    counterValue += 1;

    spanCounter.textContent = counterValue;

    console.log(spanCounter.textContent);
}



