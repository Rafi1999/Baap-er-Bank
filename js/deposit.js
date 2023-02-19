document.getElementById('btn-deposit').addEventListener('click',function(){
    const depo = document.getElementById('deposit');
    const depositamount = depo.value;
    const depositint = parseFloat( depositamount);
    if(isNaN(depositint)){
        alert('Please provide valid number');
        depo.value = '';
        return;
    }
    const depototal = document.getElementById('deposit-total');
    const previousdepo = depototal.innerText;
    const currentdepo = parseFloat(previousdepo) + parseFloat(depositamount);
    depototal.innerText = currentdepo;
    const balance = document.getElementById('balance-total');
    const balancetotal = balance.innerText;
    balance.innerText = parseFloat(balancetotal) + parseFloat(depositamount);
    depo.value = '';
})