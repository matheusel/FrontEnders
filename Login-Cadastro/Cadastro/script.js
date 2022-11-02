let inputUser = document.getElementById("user").value;
let inputPassword = document.getElementById("password").value;
let inputPasswordConfirm = document.getElementById("passwordconfirm").value;
let inputRG = document.getElementById("rg").value;
let inputCEP = document.getElementById("cep").value;
let inputEstado = document.getElementById("estado").value;
let inputCidade = document.getElementById("cidade").value;
let inputBairro = document.getElementById("bairro").value;
let inputRua = document.getElementById("rua").value;
let inputNumero = document.getElementById("numero").value;
let inputComplemento = document.getElementById("complemento").value;
let inputSubmit = document.querySelectorAll("button[type=submit]");

//FUNÇÕES API CEP

//Pega os elementos do HTML e sobrescreve usando a API
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


//Consulta a API

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
    
        } else {
            document.getElementById("cepError").innerText = ""
            document.getElementById("cepError").className += "d-none";
            preencherInput(endereco)
        }
    } else {
        limparInput()
        document.getElementById("cepError").innerText = "Seu CEP é inválido"
        document.getElementById("cepError").className += "d-flex";
    }
}

//Chama a função quando desfoca do input
document.getElementById("cep").addEventListener("focusout", pesquisarCEP)

//VALIDA AS INFORMAÇÕES DO FORM
