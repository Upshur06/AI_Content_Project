let registrationForm = document.getElementById('registrationForm');

let userInfo = [];

function RegistrationFunc(event){
    event.preventDefault();
    let regObj = {
        firstName: registrationForm['firstName'].value,
        lastName: registrationForm['lastName'].value,
        email: registrationForm['email'].value,
        username: registrationForm['username'].value,
        password: registrationForm['password'].value
    };

    userInfo.push(regObj);
    console.log(JSON.stringify(regObj));
    console.log(userInfo);

    if(regObj['firstName'] && regObj['lastName'] && regObj['email'] && regObj['username'] && regObj['password']){
        window.location.assign("/login");
    }else{
        alert("First Name, Last Name, Email, Username, and Password must be filed out");
    }
}
