//select elements from the DOM
const  modal = document.querySelector('.modal'),
       yes = document.querySelector('#yes'),
       no = document.querySelector('#no'),
       logOut = document.querySelector('.log_out');
       
//all event listeners 
const eventListeners = () =>{
    logOut.addEventListener('click', showModal);
    yes.addEventListener('click', proceedToLogOut);
    no.addEventListener('click', remainInPage);
    
}

//show modal function 
const showModal = (e) => {
  modal.classList.remove('hide'); 
 // remainInPage();
    e.preventDefault();
}

// activate logout
const proceedToLogOut = () =>{
    location.href = "index.html";
}

//remain in page 
const remainInPage = () =>{
    modal.classList.add('hide');
}

//call event listeners 
eventListeners();