const klogin = () => {
    location.href = "https://www.kioskhomehub.com/login";
    setTimeout(() => {
        alert ("logging in");
        document.getElementById('email').value='tech@am1.org';
        document.getElementById('password').value='kioskhomehub';
        document.getElementById("kioskLogin").click();    
    }, 3000);

	
};
klogin();


document.getElementById('logout-form').submit();

