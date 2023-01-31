function validMail(){
    let mail=document.getElementById("exampleInputEmail1");
    let mailerr=document.getElementById("mailError");
    let regmail = /^[\w-\.]+@[\w-]+\.+[\w\.]{2,5}$/g;

    if(mail.value.trim()==''){
        mailerr.innerHTML="Email cannot be blank";
        return false;
    }

    else if(!mail.value.match(regmail)){
        mailerr.innerHTML="Invalid Email"
        return false;
    }

    else{
        mailerr.innerHTML="<span>Email verified!</span>"
        return true;
    }
}

function validPass(){
    let pass=document.getElementById("exampleInputPassword1")
    let passerr=document.getElementById("passError")
    let regpass = /^.*(?=.{8,})(?=.*[A-z]*[A-Z])(?=.*\d).*/g

    if(pass.value.trim()==''){
        passerr.innerHTML="Password cannot be blank"
        return false;
    }

    if(pass.value.match(regpass)){

        if(!pass.value.match(/[a-z]/g)){
            passerr.innerHTML="Atleast 1 lowercase letter required"
            return false;
        }
        else if(pass.value.length<10){
            passerr.innerHTML="Poor password strength"
            return true;
        }

        else if(pass.value.length>13){
            passerr.innerHTML="<span>Password is strong</span>"
            return true;
        }

        else{
            passerr.innerHTML="<p>Intermediate password strength</p>"
            return true;
        }
    }

    if(!pass.value.match(/[A-Z]/g)){
        passerr.innerHTML="Atleast 1 Uppercase letter required"
        return false;
    }


    if(!pass.value.match(/[0-9]/g)){
        passerr.innerHTML="Atleast 1 Numeric letter required"
        return false;
    }


}

function validName1(){
    let username1 = document.getElementById('inputFirstName');
    let nameerror1 = document.getElementById('nameError1');


    if(username1.value.trim()==''){
        nameerror1.innerHTML="Username cannot be blank";
        return false;
    }

    if (username1.value.length<2){
        nameerror1.innerHTML="Username is too short"
        return false;
    }

    else if (username1.value.length>15){
        nameerror1.innerHTML="Username is too long"
        return false;
    }

    else{
        nameerror1.innerHTML="<span> First Name accepted!! </span>"
        return true;
    }
}

function validName2(){
    let username2 = document.getElementById('inputlastName');
    let nameerror2 = document.getElementById('nameError2');


    if(username2.value.trim()==''){
        nameerror2.innerHTML="Username cannot be blank";
        return false;
    }

    else if (username2.value.length>15){
        nameerror2.innerHTML="Username is too long"
        return false;
    }

    else{
        nameerror2.innerHTML="<span> Last Name accepted!! </span>"
        return true;
    }
}

function validPhone(){
    let phone=document.getElementById("exampleInputPhone")
    let phoneerr=document.getElementById("phError")
    let regphn = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/g

    if(!phone.value.match(regphn)){
        if(phone.value.match(/[A-z]/g)){
            phoneerr.innerHTML="Only numeric values accepted";
            return false;
        }
        else{phoneerr.innerHTML="Invalid phone number";
        return false;
    }    
    }
    else{
        phoneerr.innerHTML="<span>Phone number verified!</span?"
        return true;
    }
}

// submitting condition

function subMit(){
    if(validMail() && validPass() && validPhone() && validName2() && validName1()){
        return true;
    }

    else{
        return false;
    }
}