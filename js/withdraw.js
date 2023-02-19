document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdr = document.getElementById('withdraw');
    const withdrawamount = withdr.value;
    const withdrawint = parseFloat( withdrawamount);
    if(isNaN(withdrawint)){
        alert('Please provide valid number');
        withdr.value = '';
        return;
    }
    const withdrtotal = document.getElementById('withdraw-total');
    const previouswith = withdrtotal.innerText;
    const balance = document.getElementById('balance-total');
    const balancetotal = balance.innerText;
    if( parseFloat(withdrawamount) > parseFloat(balancetotal) ){
        alert("You can not withdraw more than balance");
        withdr.value = '';
        return;
    }
    const currentwithdraw = parseFloat(previouswith) + parseFloat(withdrawamount);
    withdrtotal.innerText = currentwithdraw;
    balance.innerText = parseFloat(balancetotal) - parseFloat(withdrawamount);
    withdr.value = '';
})