const InputEmail = document.getElementById("user");
const inputPassword = document.getElementById("password");
const checkMostrar = document.getElementById("mostrar");
const checkConectado = document.getElementById("conectado").value;
const form = document.getElementById("form");

function setError(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector("small")

    small.innerText = message;
    small.classList.remove("d-none")

    input.classList.remove("is-valid")
    input.className += " is-invalid"  
}

function setSucess(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector("small")

    small.className += (" d-none")
    small.classList.remove("d-flex")


    input.classList.remove("is-invalid")
    input.className += " is-valid"  
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email);
  }

  function conferirInputs(){

    if (InputEmail.value === ""){
        setError(InputEmail, "Preencha este campo")
    } else if (!checkEmail(InputEmail.value)) {
        setError(InputEmail, "Este email é inválido")
    } else {
        setSucess(InputEmail)
    }
    if (inputPassword.value === ""){
        setError(inputPassword, "Preencha este campo");
    } else {
        setSucess(inputPassword)
    }
}

//CHAMA A FUNCÃO QUANDO CLICA NA CHECKBOX E OCULTA/MOSTRA A SENHA

checkMostrar.addEventListener("change", () =>{
    if (checkMostrar.checked){
        inputPassword.setAttribute("type", "text")
//      inputPassword.type = "text"
    } else {
        inputPassword.setAttribute("type", "password")
    }
})

//BOTÃO ENVIAR

form.addEventListener("submit", (e) =>{
    e.preventDefault()
    conferirInputs()
})