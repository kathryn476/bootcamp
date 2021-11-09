// JavaScript source code
const form = document.getElementById("reg");
    const fname = document.getElementById("fname");
    const uname = document.getElementById("uname");
    const email = document.getElementById("email");
    const tel = document.getElementById("tel");
    const pwd = document.getElementById("pwd");
    const cpwd = document.getElementById("cpwd");
    const person = document.getElementById("person");
   
function validate() {
    if (fname.value == "") {
        alert("Please enter your Full Name.");
        fname.focus();
        return false;
    }

    if (uname.value == "") {
        alert("Please enter your User Name.");
        uname.focus();
        return false;
    }

    if (email.value == "" || email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        alert(
            "Please enter a valid e-mail address.");
        email.focus();
        return false;
    }

    if (tel.value == "" || !tel.value.match(/^[1-9][0-9]{9}$/)) {
        alert("Please enter your telephone and it must be 10 characters long number and first digit can't be 0!");
        tel.focus();
        return false;
    }

    if (person.value === "") {
        alert("Please select an option that you qualify!")
        return false;
    }


    if (!pwd.value.match(/^.{5,15}$/)) {
        alert("Password length must be between 5-15 characters!");
        pwd.focus();
        return false;
    }

    if (!cpwd.value.match(/^.{5,15}$/)) {
        alert("Password length must be between 5-15 characters!");
        cpwd.focus();
        return false;
    }
   

    

