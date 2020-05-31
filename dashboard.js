//triggers when page loads
document.addEventListener('DOMContentLoaded', populateDashboard);
document.addEventListener('DOMContentLoaded', populateSales);
document.addEventListener('DOMContentLoaded', populateDrs);

//for sales
function populateSales() {
    const sales = document.querySelector('.sales');
    const  expenditure = document.querySelector('.expenditure');
    let getSales = JSON.parse(sessionStorage.getItem('sales'));
    let getSalesTotal = 0;
    let getExpenditure = JSON.parse(sessionStorage.getItem('expenses'));
    let getExpenditureTotal = 0;
    //checks for session storage content 
    if (sessionStorage.getItem('sales') === null || sessionStorage.getItem('expenses') === null ) {
        sales.textContent = `0.00`;
        expenditure.textContent = `0.00`;
    }else{
             //to add up every
         for (let i = 0; i < getSales.length; i++) {
        getSalesTotal += getSales[i];
    }
         //adds up all expenditure 
        for (let i = 0; i < getExpenditure.length; i++) {
        getExpenditureTotal += getExpenditure[i];
    }
        sales.textContent = `${getSalesTotal}.00`;
        expenditure.textContent = `${getExpenditureTotal}.00`;
        populateDashboard(getSalesTotal, getExpenditureTotal);
    }
}

//display current metrics
function populateDashboard(getSalesTotal, getExpenditureTotal) {
    //select elements from the DOM
    
    const  profit = document.querySelector('.profit');
    const  loss = document.querySelector('.loss');

    //initiialise DOM elements
    
    //declare variables to store json output
    
    let getProfit = JSON.parse(sessionStorage.getItem('profit'));
    let getLoss = JSON.parse(sessionStorage.getItem('loss'));


    //condition to check for storage contents
   


    if (JSON.parse(sessionStorage.getItem('profit')) === null || JSON.parse(sessionStorage.getItem('loss')) === null) {
        profit.textContent = `0.00`;
        loss.textContent = `0.00`;
    }else if (getSalesTotal > getExpenditureTotal){
      let  finalTotal = getSalesTotal - getExpenditureTotal;
        profit.textContent = `${finalTotal.toFixed(2)}`;
        loss.textContent = '0.00'
    }else if (getExpenditureTotal > getSalesTotal){
        let finalTotal = getExpenditureTotal - getSalesTotal;
         loss.textContent = `${finalTotal.toFixed(2)}`;
         profit.textContent = '0.00';
    }
}

//populate drs
function populateDrs(){
    const bird = document.querySelector('.bird'),
          mortality = document.querySelector('.mortality_rate'),
          drugs = document.querySelector('.drugs_count'),
          water = document.querySelector('.water_count'),
          feeds = document.querySelector('.feeds'),
          vaccines = document.querySelector('.vaccines');
          
          //fix the figures 
          if (sessionStorage.getItem('birds') === null || sessionStorage.getItem('birds') < 0) {
              bird.textContent = '0';
          }else{
              bird.textContent = `${sessionStorage.getItem('birds')}`;
          }
          
          if (sessionStorage.getItem('mortality') === null || sessionStorage.getItem('mortality') < 0) {
              mortality.textContent = '0';
          }else{
              mortality.textContent = `${sessionStorage.getItem('mortality')}`;
          }
          
          if (sessionStorage.getItem('drugs') === null || sessionStorage.getItem('drugs') < 0) {
              drugs.textContent = '0';
          }else{
              drugs.textContent = `${sessionStorage.getItem('drugs')}`;
          }
          
          if (sessionStorage.getItem('water') === null || sessionStorage.getItem('water') < 0) {
              water.textContent = '0';
          }else{
              water.textContent = `${sessionStorage.getItem('water')}`;
          }
          
          if (sessionStorage.getItem('feeds') === null || sessionStorage.getItem('feeds') < 0) {
              feeds.textContent = '0';
          }else{
              feeds.textContent = `${sessionStorage.getItem('feeds')}`;
          }
          
          if (sessionStorage.getItem('vaccination') === null || sessionStorage.getItem('vaccination') < 0) {
              vaccines.textContent = '0';
          }else{
              vaccines.textContent = `${sessionStorage.getItem('vaccination')}`;
          }
}