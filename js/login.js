let logInForm = document.getElementById("logInForm");

function LoginFunc(event){
    event.preventDefault();
    
    let logInObj = {
        "username": logInForm['username'].value,
        "password": logInForm['password'].value
    }
        
    if(logInObj['username'] && logInObj['password']){
        // console.log(JSON.stringify(logInObj));
        // console.log(logInObj);
        // console.log("login working");
        window.location.assign("/dashboard");
    }else{
        alert('need username & password');
    }
}