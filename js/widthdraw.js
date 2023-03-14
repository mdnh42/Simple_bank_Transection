document.getElementById('btn-widthdraw').addEventListener('click', function(){
    const widthdraw = document.getElementById('widthdrawamout');
    const widthdrawAmount = widthdraw.value; 
    
    
    const widthdrawPlacement = document.getElementById('widthdraw-placement');
    const widthdrawvalue = widthdrawPlacement.innerText; 
    const previouswiddrawToal=  parseInt(widthdrawvalue);

    const currentWidthdrawTotal = parseInt (previouswiddrawToal) + parseInt(widthdrawAmount) ;
    widthdrawPlacement.innerText = currentWidthdrawTotal;
 
    console.log(currentWidthdrawTotal);
    widthdraw.value = '';
    const totalBalance = document.getElementById('total-balance');
    const previousBal = totalBalance.innerText;
    const previousBalInt = parseInt(previousBal);
    
    if (previousBalInt<currentWidthdrawTotal) {
        alert("You Cant");
    }
    else{
        const newbalcen = previousBalInt -currentWidthdrawTotal;
        console.log(previousBalInt);
        totalBalance.innerText = newbalcen;
    }
    
   
})