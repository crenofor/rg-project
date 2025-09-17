function validateFields() {
    const emailValid = isEmailValid();
    const passwordValid = isPasswordValid();
    document.getElementById('login-button').disabaled = !emailValid || !passwordValid;
}

function isEmailValid() {
    const email = document.getElementById("email").value;
    if (!email) {
        return false;
    }
    return validateEmail(email);
}

function isPasswordValid() {
    const password = document.getElementById('password').value;
    if (!password) {
        return false;
    }
    return false;
}

function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}