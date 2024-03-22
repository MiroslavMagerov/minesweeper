function init() {
    let form = document.querySelector('#signUp');

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        checkAll();
        if (form.checkValidity()) {
            storeValues(form);
            window.close();
        }
    })
}

function checkUsername() {
    let usernameInput = document.querySelector('#username');

    if (!/[0-9]$/.test(usernameInput.value)) {
        usernameInput.setCustomValidity(('El username debe acabar en un número'));
    }
    else {
        usernameInput.setCustomValidity('');
    }
    username.reportValidity();
}

function checkAge() {
    let birthDateInput = document.querySelector('#birthdate');
    let birthDateString = birthDateInput.value;
    let birthDate = new Date(birthDateString);
    let today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    if (age < 18) {
        birthDateInput.setCustomValidity('Debes ser mayor de edad para registrarte');
    }
    else {
        birthDateInput.setCustomValidity('');
    }
    birthDateInput.reportValidity();
}

function checkEmail() {
    let emailInput = document.querySelector('#email');
    if (!/[@itb.cat]$/.test(emailInput.value)) {
        emailInput.setCustomValidity('El email debe acabar en @itb.cat');
    }
    else {
        emailInput.setCustomValidity('');
    }
    emailInput.reportValidity();
}

function checkAll() {
    checkUsername();
    checkAge();
    checkEmail();
}

function setCookie (name, value) {
    document.cookie = name + "=" + value + ";path=/";
}

function storeValues (form) {
    setCookie("username", form.username.value);
    setCookie("birthdate", form.birthdate.value);
    setCookie("email", form.email.value);
    setCookie("size", document.querySelector('#dimensionsSlider').value);
    setCookie("bombs", document.querySelector('#bombsQuantity').value);
}