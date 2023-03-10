function formValidate() {

    var UserName = document.getElementById("login_email").value;
    var Password = document.getElementById("login_pass").value;
    var userError = document.getElementById("userError");
    var passError = document.getElementById("passError");
    var text = '';

    if (UserName.length < 6) {
        //error
        text = "Please Enter 6 Charcters";
        userError.innerHTML = text;
        return false;
    }
    else if (isNaN (Password)) {
        text = "Please Enter a Vailed password";
        passError.innerHTML = text;
        return false;
    }
    else{
        alert("Done");
        return true;
    }
}






function closePopUp(){
    document.getElementById("popUp").style.display= "none";
    document.getElementById("foot").style.display = "block";
}

function openPopUp(){
    document.getElementById("popUp").style.display = "block";
    document.getElementById("foot").style.display = "none";
}
// onsubmit="return false"
// validation
// UserName.indexOf("@") == -1




