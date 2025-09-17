function validarEmail() {
    let email = document.getElementById("email").value;
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let resultado = document.getElementById("resultado");

    if(regex.test(email)) {
        resultado.innerText = "E-mail válido!";
        resultado.style.color = "green";
    } else {
        resultado.innerText = "E-mail inválido!";
        resultado.style.color = "red";
    }
}