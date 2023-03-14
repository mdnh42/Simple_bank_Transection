document.getElementById('btn-deposite').addEventListener('click', function(){
    const Deposite = document.getElementById('amount-user');
    const newDepositeAmount = Deposite.value; 
    
    const depositeTotal = document.getElementById('deposite_placement')
    const prevousTotal = depositeTotal.innerText; 
    const currentDepositTotal = parseInt(prevousTotal) + parseInt(newDepositeAmount); 
    depositeTotal.innerText = currentDepositTotal;

    Deposite.value = '';

    const totalBalance = document.getElementById('total-balance');
    const cubl = totalBalance.innerText;
    totalBalance.innerText = parseInt(cubl)  + currentDepositTotal ;

})


// ()

document.getElementById('logout').addEventListener('click', function()
{
    window.location.href = 'index.html';
    alert("Don't Share Your Password");
})
