function validate() {
    var Fname =
        document.forms["RegForm"]["fname"];
    var Uname =
        document.forms["RegForm"]["uname"];
    var Email =
        document.forms["RegForm"]["email"];
    var Tele =
        document.forms["RegForm"]["tel"];
    var Pass =
        document.forms["RegForm"]["pwd"];
    var Cpass =
        document.forms["RegForm"]["cpwd"];
    var Per =
        document.forms["RegForm"]["person"];


    if (Fname.value == "") {
       window.alert("Please enter your  Full Name.");
      // document.getElementById('fname').innerHTML = "this is invalid name";
       Fname.focus();
       return false;
    }

    if (Uname.value == "") {
        alert("Please enter your  User Name.");
        Uname.focus();
        return false;
    }
    if (Tele.value == "") {
        alert("Please enter your Telephone.");
        Tele.focus();
        return false;
    }

    if (Email.value == "") {
        alert(
            "Please enter a valid e-mail address.");
        email.focus();
        return false;
    }

    if (Per.value == "") {
        alert(
            "Please select an option.");
        Per.focus();
        return false;
    }

    if (Pass.value == "" || !Pass.value.match(/^.{5,15}$/)) {
        alert("Please enter your password and it should be length must be between 5-15 characters!");
        Pass.focus();
        return false;
    }

    if (Cpass.value == "" || !Cpass.value.match(/^.{5,15}$/)) {
        alert("Please confirm password");
        Cpass.focus();
        return false;
    }

    if (Pass.value != Cpass.value) {
        alert("Password did not match");
    }



    return true;
}
