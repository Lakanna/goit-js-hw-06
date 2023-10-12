
const form = document.querySelector('.login-form');

console.log(form);

form.addEventListener('submit', handlerSubmit);

function handlerSubmit(event) {

    event.preventDefault();

    const regForm = event.currentTarget;

    const emailForm = regForm.elements.email.value;

    const passwordForm = regForm.elements.password.value;

    if (emailForm === '' || passwordForm === "") {
       return alert('Please, fill of the fields');
        
    };

    const data = {
        email: emailForm,
        password: passwordForm
    };
    
    console.log(data);

    event.currentTarget.reset();
};
