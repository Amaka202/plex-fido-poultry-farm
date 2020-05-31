//select elements from Dom 
const form = document.querySelector('#contact'),
      submit = document.querySelector('#contact-submit'),
      birds = document.querySelector('.drs_birds'),
      feeds = document.querySelector('.drs_feeds'),
      water =document.querySelector('.drs_water'),
      vaccination = document.querySelector('.drs_vaccination'),
      drugs = document.querySelector('.drs_drugs'),
      mortality = document.querySelector('.drs_mortality');
      
//default the form behaviour 
form.addEventListener('submit', saveToLocalStorage);

//save to local storage function 
function saveToLocalStorage(e){
    sessionStorage.setItem('birds', `${birds.value}`);
    birds.value = '';
    
    sessionStorage.setItem('feeds', `${feeds.value}`);
    feeds.value = '';
    
    sessionStorage.setItem('water', `${water.value}`);
    water.value = '';
    
    sessionStorage.setItem('vaccination', `${vaccination.value}`);
    vaccination.value = ''; 
    
    sessionStorage.setItem('drugs', `${drugs.value}`);
    drugs.value = '';
    
    sessionStorage.setItem('mortality', `${mortality.value}`);
    mortality.value = '';
    //show success message 
    showSuccess();
    e.preventDefault();
}
const success = document.querySelector('.success');
   
//show success function 
function showSuccess(){
   success.classList.remove('hide');
   setTimeout(removeSuccess, 3000);
} 

//remove success message 
function removeSuccess(){
    success.classList.add('hide');
}