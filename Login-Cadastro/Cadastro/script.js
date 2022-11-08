const InputEmail = document.getElementById("user").value;
const InputEmailCaixa = document.getElementById("user");
const inputPassword = document.getElementById("password");
const inputPasswordConfirm = document.getElementById("passwordconfirm");
const inputRG = document.getElementById("rg");
const inputCEP = document.getElementById("cep").value;
const inputCEPCaixa = document.getElementById("cep");
const inputEstado = document.getElementById("estado");
const inputCidade = document.getElementById("cidade");
const inputBairro = document.getElementById("bairro");
const inputRua = document.getElementById("rua");
const inputNumero = document.getElementById("numero");
const inputComplemento = document.getElementById("complemento");
const inputCheckBox = document.getElementById("checkbox")
let checkMostrar = document.getElementById("mostrar");
const form = document.getElementById("form");

//API CEP

//PEGA OS ELEMENTOS DO HTML E SOBRESCREVE USANDO A API
const preencherInput = (endereco) => {
    document.getElementById("estado").value = endereco.uf;
    document.getElementById("cidade").value = endereco.localidade;
    document.getElementById("bairro").value = endereco.bairro;
    document.getElementById("rua").value = endereco.logradouro;
    document.getElementById("complemento").value = endereco.complemento;
}

const limparInput = (endereco) => {
    document.getElementById("estado").value = ""
    document.getElementById("cidade").value = ""
    document.getElementById("bairro").value = ""
    document.getElementById("rua").value = ""
    document.getElementById("complemento").value = ""
}


//CONSULTA A API CEP
const eNumero = (numero) => /^[0-9]+$/.test(numero);
const cepValido = (cep) => cep.length == 8 && eNumero(cep);

const pesquisarCEP = async () => {
    const cep = document.getElementById('cep').value;
    const url = `https://viacep.com.br/ws/${cep}/json/`

    if (cepValido(cep)){
        document.getElementById("cepError").className += "d-none";
        limparInput()
        const requerir = await fetch(url);
        const endereco = await requerir.json(); 

        if (endereco.hasOwnProperty("erro")){
            document.getElementById("cepError").innerText = "Seu CEP não foi encontrado"
            document.getElementById("cepError").className += "d-flex";
            document.getElementById("cep").className += " is-invalid"    
        } else {
            document.getElementById("cep").classList.remove("is-invalid")
            document.getElementById("cepError").innerText = ""
            document.getElementById("cepError").className += "d-none";
            preencherInput(endereco)
        }
    } else {
        limparInput()
        document.getElementById("cepError").innerText = ""
        document.getElementById("cepError").innerText = "Seu CEP é inválido"
        document.getElementById("cepError").className += "d-flex";
        document.getElementById("cep").className += " is-invalid"   
    }
}

//FUNÇÕES DE CONFERIR OS INPUTS

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email);
  }

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

//CONFERIR SE FOI PREENCHIDO OS INPUTS E ESTÃO CORRETOS

function conferirInputs(){

    if (InputEmailCaixa.value === ""){
        setError(InputEmailCaixa, "Preencha este campo")
    } else if (!checkEmail(InputEmailCaixa.value)) {
        setError(InputEmailCaixa, "Este email é inválido")
    } else {
        setSucess(InputEmailCaixa)
    }
    if (inputPassword.value === ""){
        setError(inputPassword, "Preencha este campo");
    } else {
        setSucess(inputPassword)
    }

    if (inputPasswordConfirm.value === ""){
        setError(inputPasswordConfirm, "Preencha este campo");
    } else {
        setSucess(inputPasswordConfirm)
    }
    
    if (inputPassword.value !== inputPasswordConfirm.value){
        setError(inputPasswordConfirm, "As senhas não conferem");
    } 

    if (inputRG.value === ""){
        setError(inputRG, "Preencha este campo");
    } else {
        setSucess(inputRG)
    }

    if (inputCEPCaixa.value === ""){
        setError(inputCEPCaixa, "Preencha este campo");
    } else {
        setSucess(inputCEPCaixa)
    }

    if (inputEstado.value === ""){
        setError(inputEstado, "Preencha este campo");
    } else {
        setSucess(inputEstado)
    }

    if (inputCidade.value === ""){
        setError(inputCidade, "Preencha este campo");
    } else {
        setSucess(inputCidade)
    }

    if (inputBairro.value === ""){
        setError(inputBairro, "Preencha este campo");
    } else {
        setSucess(inputBairro)
    }

    if (inputRua.value === ""){
        setError(inputRua, "Preencha este campo");
    } else {
        setSucess(inputRua)
    }

    if (inputNumero.value === ""){
        setError(inputNumero, "Preencha este campo");
    } else {
        setSucess(inputNumero)
    }

    if (inputComplemento.value === ""){
        setError(inputComplemento, "Preencha este campo");
    } else {
        setSucess(inputComplemento)
    }

    if (!inputCheckBox.checked){
        setError(inputCheckBox, "É necessário aceitar os termos de uso.");
    } else {
        setSucess(inputCheckBox)
    }

}

//CHAMA A FUNÇÃO pesquisarCEP QUANDO DESFOCA DO INPUT
document.getElementById("cep").addEventListener("focusout", pesquisarCEP)

//CHAMA A FUNCÃO QUANDO CLICA NA CHECKBOX E OCULTA/MOSTRA A SENHA

checkMostrar.addEventListener("change", () =>{
    if (checkMostrar.checked){
        inputPassword.setAttribute("type", "text")
        inputPasswordConfirm.setAttribute("type", "text")

//      inputPassword.type = "text"
    } else {
        inputPassword.setAttribute("type", "password")
        inputPasswordConfirm.setAttribute("type", "password")
    }
})

//BOTÃO ENVIAR

form.addEventListener("submit", (e) =>{
    e.preventDefault()
    conferirInputs()
})
