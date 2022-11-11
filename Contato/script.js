let email = document.getElementById('email');
let text= document.getElementById('text');
let form = document.querySelector('form');
 
form.addEventListener('submit', (e) => {
  if(email.value == "")
  e.preventDefault();
  console.log(email.value);
  console.log(text.value);
    
})
  
