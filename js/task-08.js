const form = document.querySelector('.login-form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const { elements: { email, password } } = event.currentTarget;
    if(email.value === '' || password.value === '') {
        alert('Все поля должны быть заполнены.');
    }
    // const formData = new FormData({
    //     email: event.email.value,
    //     password: event.password.value
    // });
    const user = {
        email: email.value,
        password: password.value
    };
    console.log(user);
    form.reset();
});
