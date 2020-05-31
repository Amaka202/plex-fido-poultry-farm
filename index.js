let form = document.querySelector('form');
let signInBtn = document.querySelector('.btn');
let errormsg = document.querySelector('#errormsg');
const error = document.querySelector(".hide");

form.addEventListener('submit', function(e) {
  
  e.preventDefault();
})

// entered data from the login-form


signInBtn.addEventListener('click',
function () {
    // stored data from the register-form
    let storedEmail = localStorage.getItem('email');
    let storedPassword = localStorage.getItem('password');
  
    let emaild = document.querySelector('.user-email');
let passwordd = document.querySelector('.user-password');
let email = emaild.value;
let password = passwordd.value;
    if(storedEmail === null || storedPassword === null || (email.toLowerCase() !== storedEmail.toLowerCase()) || (password !== storedPassword) || email === '' || password === ''){
        error.classList.remove("hide");
      emaild.style.border = `1px solid red`;
      passwordd.style.border = `1px solid red`;
   
    }
    else if((email.toLowerCase() === storedEmail.toLowerCase()) || (password === storedPassword)) {
  
      
        godas();
        
    }/*else if(localStorage.getItem('email') ==='' || localStorage.getItem('password') ===''){
        error.classList.remove("hide");
      emaild.style.border = `1px solid red`;
      passwordd.style.border = `1px solid red`;
   
    }*/else {
      error.classList.remove("hide");
      emaild.style.border = `1px solid red`;
      passwordd.style.border = `1px solid red`;
    };

}) ;
let godas  = () => {
    window.location = "dashboard.html";
  } 
  
  let emaild = document.querySelector('.user-email');
let passwordd = document.querySelector('.user-password');
let email = emaild.value;
let password = passwordd.value;
  emaild.addEventListener('keydown', function(){
      
      
    error.classList.add("hide");
    emaild.style.border = `1px solid blue`;
    passwordd.style.border = `1px solid blue`;
  })