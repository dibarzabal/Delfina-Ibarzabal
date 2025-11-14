let form = document.querySelector(".contact-form");
let campoNombre = document.querySelector("#fullName");
let campoEmail = document.querySelector("#email");
let campoPhone = document.querySelector("#phone");
let campoContraseña = document.querySelector("#password");
let campoReContraseña = document.querySelector("#rePassword");

let nameVacio = document.querySelector(".fullName")
let emailVacio = document.querySelector(".email")
let phone = document.querySelector(".phone")
let password = document.querySelector(".password")
let rePassword = document.querySelector(".rePassword")
let phoneVacio = document.querySelector(".phoneVacio")
let phoneCar = document.querySelector(".phoneCaracteres")
let passwordVacio = document.querySelector(".passwordVacio")
let passwordCaracteres = document.querySelector(".passwordCaracteres")
let passwordIgual = document.querySelector(".igual")
let rePasswordVacio = document.querySelector(".rePasswordVacio")
let rePasswordIgual = document.querySelector(".reIgual")


form.addEventListener("submit", function(event) {

    event.preventDefault();

    if (campoNombre.value == ""){
        nameVacio.style.display = "block"

    } else if (campoEmail.value == ""){
        emailVacio.style.display = "block"

    }else if (campoPhone.value == ""){
        phone.style.display = "block"
        phoneVacio.style.display = "block"

    } else if (campoPhone.value.length < 8){
        phoneCar.style.display = "block"

    }else if (campoContraseña.value == ""){
        password.style.display = "block"
        passwordVacio.style.display = "block"

    } else if (campoContraseña.value.length < 3){
        passwordCaracteres.style.display = "block"

    }else if (campoContraseña.value != campoReContraseña.value){
        passwordIgual.style.display = "block"

    }else if (campoReContraseña.value == ""){
        rePassword.style.display = "block"
        rePasswordVacio.style.display = "block"

    }else if (campoReContraseña.value != campoContraseña.value){
        rePasswordIgual.style.display = "block"

    } else {
        this.submit()
        
    }
})