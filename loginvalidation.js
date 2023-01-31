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

// submitting condition

function subMit(){
    if(validMail() && validPass()){
        return true;
    }

    else{
        return false;
    }
}