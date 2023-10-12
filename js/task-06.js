const textInput = document.querySelector('#validation-input');

console.dir(textInput);

textInput.addEventListener("blur", handlerInput);

function handlerInput(event) {
   
    const inputLength = Number(textInput.value.length);
    const currentLength = Number(textInput.dataset.length);

if (inputLength === currentLength) {
    textInput.classList.add('valid');
    textInput.classList.remove("invalid");
} else {
    textInput.classList.add('invalid');
    textInput.classList.remove("valid");
}
    
    
};



