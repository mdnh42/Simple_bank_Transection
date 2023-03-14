document.getElementById('btn-deposite').addEventListener('click', function(){
    const Deposite = document.getElementById('amount-user');
    const newDepositeAmount = Deposite.value; 
    
    const depositeTotal = document.getElementById('deposite_placement')
    const prevousTotal = depositeTotal.innerText; 

    const currentDepositTotal = parseInt(prevousTotal) + parseInt(newDepositeAmount); 
    
    depositeTotal.innerText = currentDepositTotal;

    Deposite.value = '';

})

