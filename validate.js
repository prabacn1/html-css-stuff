function validateForm(){  
    var name=document.user.name.value;  
    var email=document.user.email.value; 
    var phone =document.user.number.value; 
    var status=false;  
      
    if(name.length < 3){  
        document.getElementById("nameErr").innerHTML=  "Length of name should be greater than 6";  
        status=false;  
    }
    else{
        status=true;
    }

    if(email == ""){  
        document.getElementById("emailErr").innerHTML=  "Enter Email";  
        status=false;  
    }
    else{
        status=true;
    }
    var regex = /^[0-9]\d{9}$/;
    if(regex.test(phone)==false){
        document.getElementById("numberErr").innerHTML=  "Number is not valid";  
        status=false;  
    }
    return status;  
    }  