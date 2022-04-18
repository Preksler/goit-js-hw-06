const inputForm = document.querySelector('#validation-input');

inputForm.addEventListener('blur', (event) => {
    if (+event.currentTarget.value.length !== +inputForm.getAttribute('data-length')) {
        event.currentTarget.classList.add('invalid');
        event.currentTarget.classList.remove('valid');
    } else {
        event.currentTarget.classList.remove('invalid');
        event.currentTarget.classList.add('valid');
    }
});