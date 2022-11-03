let inputUser = document.getElementById("user").value;
let inputPassword = document.getElementById("password");
let form = document.getElementById("form");
let checkMostrar = document.getElementById("mostrar");
let checkConectado = document.getElementById("conectado").value;

//CHAMA A FUNCÃO QUANDO CLICA NA CHECKBOX E OCULTA/MOSTRA A SENHA

checkMostrar.addEventListener("change", () =>{
    if (checkMostrar.checked){
        inputPassword.setAttribute("type", "text")
//      inputPassword.type = "text"
    } else {
        inputPassword.setAttribute("type", "password")
    }
})


