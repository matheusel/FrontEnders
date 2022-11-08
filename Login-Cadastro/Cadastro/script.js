const InputEmail = document.getElementById("user").value;
const InputEmailCaixa = document.getElementById("user");
const inputPassword = document.getElementById("password");
const inputPasswordConfirm = document.getElementById("passwordconfirm");
const inputRG = document.getElementById("rg");
const inputCEP = document.getElementById("cep").value;
const inputEstado = document.getElementById("estado");
const inputCidade = document.getElementById("cidade");
const inputBairro = document.getElementById("bairro");
const inputRua = document.getElementById("rua");
const inputNumero = document.getElementById("numero");
const inputComplemento = document.getElementById("complemento");
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
const cepValido = (cep) => cep.length = 8 && eNumero(cep);

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

//CONFERIR SE OS INPUTS ESTÃO PREENCHIDOS CORRETAMENTE

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email);
  }

function setError(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector("small")

    small.innerText = message;
    small.classList.remove("d-none")

    input.className += " is-invalid"  
}

function conferirInputs(){
    //conferir se foi preenchido os campos email
    if (InputEmailCaixa.value === ""){
        setError(InputEmailCaixa, "Preencha este campo")
    } else if (!checkEmail(InputEmailCaixa.value)) {
        setError(InputEmailCaixa, "Este email é inválido")
    }
    //conferir se foi preenchido os campos senha
    if (inputPassword.value === ""){
        setError(inputPassword, "Preencha este campo");
    }
    
    if (inputPassword.value !== inputPasswordConfirm.value){
        setError(inputPasswordConfirm, "As senhas não conferem");
    }

    //conferir se foi preenchido os campos rg

    if (inputRG.value === ""){
        setError(inputRG, "Preencha este campo");
    }

    if (inputEstado.value === ""){
        setError(inputEstado, "Preencha este campo");
    }

    if (inputCidade.value === ""){
        setError(inputCidade, "Preencha este campo");
    }

    if (inputBairro.value === ""){
        setError(inputBairro, "Preencha este campo");
    }

    if (inputRua.value === ""){
        setError(inputRua, "Preencha este campo");
    }

    if (inputNumero.value === ""){
        setError(inputNumero, "Preencha este campo");
    }

    if (inputComplemento.value === ""){
        setError(inputComplemento, "Preencha este campo");
    }

}

//CHAMA A FUNÇÃO pesquisarCEP QUANDO DESFOCA DO INPUT
document.getElementById("cep").addEventListener("focusout", pesquisarCEP)

//BOTÃO ENVIAR

form.addEventListener("submit", (e) =>{
    e.preventDefault()
    conferirInputs()
})
