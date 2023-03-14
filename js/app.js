document.getElementById('btn-submit').addEventListener('click', function()
{
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if(email === 'sontan@baap.com' && password == 'secret')
    {
        console.log("Healthy");
    }
    else
    {
        alert("Stupid");
    }
})
