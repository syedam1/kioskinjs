/*Kioskhomehub*/
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

//Logout
document.getElementById('logout-form').submit();


/* www.dropmark.com*/
location.href = "https://app.dropmark.com/login";


document.getElementById('f_email').value='tech@am1.org';
document.getElementById('f_password').value='kioskhomehub';
document.getElementsByClassName("js-submit-button").submit.click();




