const email = document.getElementById('email');
const text = document.getElementById('text');
const form = document.querySelector('form');
 
form.addEventListener('submit', (e) => {
    e.preventDefault()
    conferirInputs()
    
})

function setError(input, message){
  const form = input.parentElement;
  const small = form.querySelector("small")

  small.innerText = message;
  small.classList.remove("d-none")

  input.classList.remove("is-valid")
  input.className += " is-invalid"  
}

function setSucess(input, message){
  const form = input.parentElement;
  const small = form.querySelector("small")

  small.className += (" d-none")
  small.classList.remove("d-flex")


  input.classList.remove("is-invalid")
  input.className += " is-valid"  
}
  

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email);
}


//CONFERIR SE FOI PREENCHIDO OS INPUTS E ESTÃO CORRETOS

function conferirInputs(){

  if (email.value === ""){
      setError(email, "Preencha este campo")
  } else if (!checkEmail(email.value)) {
      setError(email, "Este email é inválido")
  } else {
      setSucess(email)
  }

  if (text.value === ""){
      setError(text, "Preencha este campo")
  } else {
      setSucess(text)
  }
  
  const formControl = form.querySelectorAll("input") && form.querySelectorAll("textarea")

  const formValid = [...formControl].every(formControl => {
      return (formControl.className === "form-control is-valid")
  })

  if (formValid) {
      alert("Mensagem enviada com sucesso!")
      window.location.href = "../index.html"
  }

}