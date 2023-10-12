
const nameInput = document.querySelector('#name-input');

const nameOutput = document.querySelector("#name-output");

console.dir(nameInput);
console.log(nameOutput);

nameInput.addEventListener("input", handlerInput);

function handlerInput(event) {
 
    nameOutput.textContent = event.target.value || "Anonimous";

};