const InputEmail = document.getElementById("user");
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
        alert("Se o e-mail estiver correto você receberá um link de recuperação")
    }
}

//BOTÃO ENVIAR

form.addEventListener("submit", (e) =>{
    e.preventDefault()
    conferirInputs()
})