document.getElementById('btn-submit').addEventListener('click', function(){
    //use .value always to get text from input field
    const emailfind = document.getElementById('user-email');
    const email = emailfind.value;
    
    const passfind = document.getElementById('user-pass');
    const pass = passfind.value;
    if(email==='alrafi4@gmail.com' && pass==='1234'){
        window.location.href = 'bank.html';
    }
    else{
        alert("Invalid User");
    }
})