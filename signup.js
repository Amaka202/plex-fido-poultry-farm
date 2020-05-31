let form = document.querySelector('form');
let nameInput = document.querySelector('.name');
let idInput = document.querySelector('.staff');
let emailInput = document.querySelector('.email');
let passwordInput = document.querySelector('.password');
let submitBtn = document.querySelector('.btn');
const warn = document.querySelector('.warn');
 
//let idValue = idInput.value;
form.addEventListener('submit', function(e) {
  let idInputArr = [];

   // store the entered name in web storage
   localStorage.setItem('name', nameInput.value);
   localStorage.setItem('email', emailInput.value);
   localStorage.setItem('password', passwordInput.value);
  // localStorage.setItem('id', idInput.value);
   
   
  
  // localStorage.setItem('id',`${idInputArr}`);
   //check for ID input 
   if(localStorage.getItem('id') === null) {
       
       idInputArr.push(idInput.value);
       
       localStorage.setItem(`id`, `${JSON.stringify(idInputArr)}`);
       goToLogIn();
   }else{
     
     idInputArr = JSON.parse(localStorage.getItem('id'));
      
       idInputArr.forEach(function(ids){
           if(idInput.value === ids){
              warn.classList.remove('hide');
              idInput.style.border ='1px solid red';
              idInput.addEventListener('keydown', function(){
                  warn.classList.add('hide');
                  idInput.style.border = '1px solid dodgerblue';
              });
           }else{
             idInputArr = JSON.parse(localStorage.getItem('id'));
               idInputArr.push(idInput.value);
               localStorage.setItem(`id`, `${JSON.stringify(idInputArr)}`);
               goToLogIn();
           }
       });
   }
   

    e.preventDefault();
  });
  


  let goToLogIn  = () => {
    window.location = "index.html";
  } 