//select elements from the DOM
const UIprofit = document.querySelector('.profit'),
      UIloss = document.querySelector('.loss'),
      UIsalesInput = document.querySelector('#sales_input'),
      UIexpensesInput = document.querySelector('#expenses_input'),
      UIcalculate = document.querySelector('.calculate-btn');
      
      //sets today's date
      let today = new Date();
      document.getElementById('time').innerText = `${today}`;
      
      //listen for submit event 
      const eventListener = () =>{
        UIcalculate.addEventListener('click', function() {
          // show loader
          UIprofit.display = 'none';
          UIloss.display = 'none';
          document.querySelector('#loading').classList.remove('hide');
          
          setTimeout(calculate, 1100);
        });
      };
      //stores every input in an array
      let   salesArr = [];
       let expensesArr = [];
     //calculate profit or loss 
     const calculate = () =>{
       let salesInput = (parseFloat(UIsalesInput.value));
       let expensesInput = (parseFloat(UIexpensesInput.value));
       
       //checks for the storage ID
        
       //store sales and expenditure in sessionStorage
      if (salesInput < 0 || expensesInput < 0) {
          //check if local storage is empty 
          if(sessionStorage.getItem('sales') === null || sessionStorage.getItem('expenses') === null){
            salesArr.push(0);
            sessionStorage.setItem('sales', `${JSON.stringify(salesArr)}`);
            expensesArr.push(0);
            sessionStorage.setItem('expenses', `${JSON.stringify(expensesArr)}`);
          } 
      }
      else{
        // salesArr = JSON.parse(sessionStorage.getItem('salesArr'));
         //expensesArr = JSON.parse(sessionStorage.getItem('expensesArr'));
       if(salesInput >=  0 && salesInput > expensesInput){
       salesArr.push(salesInput);
       sessionStorage.setItem('sales', `${JSON.stringify(salesArr)}`);
       expensesArr.push(expensesInput);
       sessionStorage.setItem('expenses', `${JSON.stringify(expensesArr)}`);
      } else if(expensesInput >=  0 && expensesInput > salesInput){
       salesArr.push(salesInput);
       sessionStorage.setItem('sales', `${JSON.stringify(salesArr)}`);
       expensesArr.push(expensesInput);
       sessionStorage.setItem('expenses', `${JSON.stringify(expensesArr)}`);
      } 
     } 
       let addition = 0;
       let subtraction =0;
       
       //displays error message 
     const showError = (error) =>{
         const accountHeading = document.querySelector('main'),
             account = document.querySelector('#calculate');
       const errorDiv = document.createElement('div');
     
         errorDiv.className = 'error';
       //errorDiv.appendChild(document.createTextNode(error));
      errorDiv.innerHTML = `<i class="fas fa-exclamation-circle"></i> Please fill all fields `;
       
       accountHeading.insertBefore(errorDiv, account);
       
       setTimeout(clearError, 3000); 
     }
     
        const clearError = () => {
            document.querySelector('.error').remove();
        }
       
       //validate input
       if(isNaN(salesInput) || isNaN(expensesInput) || salesInput < 0 || expensesInput < 0){
         showError('Please fill all fields with your figures');
         document.querySelector('#loading').classList.add('hide'); 
       }else{
         if(salesInput > expensesInput){
           let difference = salesInput - expensesInput;
           addition += difference;
           UIprofit.textContent = `${(parseFloat(UIprofit.textContent) + addition).toFixed(2)}`;
           //local storage
           sessionStorage.setItem('profit' ,`${JSON.stringify(UIprofit.textContent)}`);
         }else if(expensesInput > salesInput){
           let difference = expensesInput - salesInput;
           subtraction += difference;
           UIloss.textContent = `${(parseFloat(UIloss.textContent) + subtraction).toFixed(2)}`;
           sessionStorage.setItem('loss' ,`${JSON.stringify(UIloss.textContent)}`);
         }else if (salesInput === expensesInput){
           UIprofit.textContent = `${parseFloat(UIprofit.textContent) + 0}`;
           UIloss.textContent = `${parseFloat(UIloss.textContent) + 0}`;
         }document.querySelector('#loading').classList.add('hide');
       }
       UIsalesInput.value = '';
       UIexpensesInput.value = '';
     };
     
     //call eventListener
     eventListener();