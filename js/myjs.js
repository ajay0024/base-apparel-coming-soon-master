function val(){

    var email = document.getElementById('email').value;
    if(!email){
        displayError()
    }
    return ValidateEmail(email)
    return true;    // in success case
}
function ValidateEmail(email)
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
  {
    return (true)
  }
  else{
    displayError()
  }
    return (false)
}
function displayError(){
  document.getElementById("email-error-icon").classList.remove("invisible");
  document.getElementById("email-error").classList.remove("invisible");
  document.getElementById('email').focus();
  return false;    // in failure case
}
