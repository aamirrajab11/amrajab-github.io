/*
Program Name: Aamir's HW 2
    Author Name: Aamir Rajab
    Date Created: 01/30/2026
    Date last Modified: 02/07/2026
    Version: 1.0
    Description: This is Aamir's JS Code for HW2
*/

//dynamic date js code//
const d = new Date();
let text= d.toLocaleDateString();
document.getElementById("today").innerHTML = text;

//range slider js code//
let slider = document.getElementById("range")
let output = document.getElementById("range-slider")
output.innerHTML = slider.value

slider.oninput = function() {output.innerHTML = this.value;}

function validateDob(){
    dob=document.getElementById("dob");
    let date = new Date(dob.value);
    let maxDate= new Date().setFullYear(new Date()-120);

    if (date > new Date()) {
        document.getElementById("dob-error").innerHTML="Date cannot be in the future."
        dob.value="";
        return false;
    } else if (date < new Date(maxDate)) {
        document.getElementById("dob-error").innerHTML="Date cannot be more than 120 years ago"
        dob.value="";
        return false;
    } else {
        document.getElementById("dob-error").innerHTML =""
        return true
    }
}

function validateSSn(){
    const ssn = document.getElementById("ssn").value; 
    //regx for ssn pattern thing
    const ssnR = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;

     if (!ssnR.test(ssn)) {
        document.getElementById("ssn-error").innerHTML = 
        "Please enter a valid SSN";
        return false;
    } else {
        document.getElementById("ssn-error").innerHTML = "";
        return true;
    }
}

// zip code  validation js code
function validateAddress1(){
    var ad1= document.getElementById("address1").value;
    console.log(ad1);
    console.log(ad1.length);

    if (ad1.length <2){
        document.getElementById("address1-error").innerHTML=
        "Please enter something on address line.";
        return false;
    } else{
        document.getElementById("address1-error").innerHTML ="";
        return true;
    }
}

// zipcode validation js code
function validateZcode() {
    const zipInput = document.getElementById("zcode");
    let zip = zipInput.value.replace(/[^\d-]/g, ""); // removes any non-numbers and non-dash characters

    if (!zip) {
        document.getElementById("zcode-error").innerHTML = 
        "Zip code can't be blank";
        return false;
    }

    if (zip.length > 5) {
        zip = zip.slice(0, 5) + "-" + zip.slice(5, 9);
    } else {
        zip = zip.slice(0, 5);
    }

    zipInput.value = zip;
    document.getElementById("zcode-error").innerHTML = "";
    return true;
}

//email validation js code
function validateEmail(){
    email = document.getElementById("email").value;
    var emailR = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    if (email =="") {
        document.getElementById("email-error").innerHTML = "Email cannot be empty";
        return false;
    } else if(!email.match(emailR)) {
        document.getElementById("email-error").innerHTML = "Please enter a valid email address";
        return false;
    } else {
        document.getElementById("email-error").innerHTML = "";
        return true;
    }
}

// phone number validation js code
function validatePhone(){
    const phoneInput = document.getElementById("phnum");
    const phone = phoneInput.value.replace(/\D/g, "");

    if (phone.length !==10){
        document.getElementById("phnum-error").innerHTML = "Phone number cannot be left blank.";
        return false;
    }

   const formattedPhone= 
   phone.slice(0, 3) + "-" + phone.slice (3.6) + "-" + phone.slice(6);
    phoneInput.value = formattedPhone;
    document.getElementById("phnum-error").innerHTMl = "";
    return true;
    }  

    // username validation js code
    function validateUname() {
    uname = document.getElementById("uname").value.toLowerCase();
    document.getElementById("uname").value = uname;

    if (uname.length == 0) {
        document.getElementById("uname-error").innerHTML = 
        "User ID can't be blank";
        return false;
    }
    if (!isNaN(uname.charAt(0))) {
        document.getElementById("uname-error").innerHTML = 
        "User ID can't start with a number";
        return false;
    }

    //checks that username consists of only letters, nuumbers, or underscores
    let regex = /^[a-zA-Z0-9_-]+$/;
    if (!regex.test(uname)) {
        document.getElementById("uname-error").innerHTML = 
        "User ID can only have letters, numbers, underscores, and dashes";
        return false;
    } else if (uname.length < 5) {
        document.getElementById("uname-error").innerHTML = 
        "User ID must be at least 5 characters";
        return false;
    } else if (uname.length > 30) {
        document.getElementById("uname-error").innerHTML = 
        "User ID can't exceed 30 characters";
        return false;
    } else {
        document.getElementById("uname-error").innerHTML = "";
        return true;
    }
}

function validatePassword() {
    const pword = document.getElementById("pword").value;
    const uname = document.getElementById("uname").value;

    //sets up and initalizes array
    const errorMessage = [];

    //checks for lowercase letters
    if (!pword.match(/[a-z]/)) {
        errorMessage.push("Enter at least one lowercase letter");
    }
    //checks for uppercase letters
    if (!pword.match(/[A-Z]/)) {
        errorMessage.push("Enter at least one uppercase letter");
    }
    //checks for numbers letters
    if (!pword.match(/[0-9]/)) {
        errorMessage.push("Enter at least one Number");
    }
    //checks for special characters
    if (!pword.match(/[!\@#\$%&*\-_\\.+\(\)]/)) {
        errorMessage.push("Enter at least one special character");
    }
    //checks for username not in password
    if (pword == uname || pword.includes(uname)) {
        errorMessage.push("Password cannot contain username");
    }
    //displays error message if theres errors
    const errorContainer = document.querySelector(".pword-message");
    errorContainer.innerHTML = errorMessage
    .map((message) => `<span>${message}</span><br>`)
    .join("");
}

    //confirm password
    function confirmPassword() {
    pword1 = document.getElementById("pword").value;
    pword2 = document.getElementById("con_pword").value;

    if (pword1 !== pword2) {
        document.getElementById("pword2-error").innerHTML = 
        "Passwords don't match";
        return false;
    } else {
        document.getElementById("pword2-error").innerHTML = 
        "Passwords match";
        return true;
    }
}

    //re-display user input back to user (review button)
    function reviewInput() {
    var formcontent = document.getElementById("signup");
    var formoutput = "<table class='output'><tr><th colspan='3'>Review Your Information:</th></tr>";

    for (var i = 0; i < formcontent.elements.length; i++) {
        var el = formcontent.elements[i];
        var datatype = el.type;
        var name = el.name;
        var value = el.value;

        // skip elements with no name
        if (!name) continue;

        switch (datatype) {
            case "checkbox":
                if (el.checked) {
                    formoutput += "<tr><td align='right'>" + name + "</td>";
                    formoutput += "<td class='outputdata'>&#x2713;</td></tr>";
                }
                break;

            case "radio":
                if (el.checked) {
                    formoutput += "<tr><td align='right'>" + name + "</td>";
                    formoutput += "<td class='outputdata'>" + value + "</td></tr>";
                }
                break;

            case "range":
                // Only show the slider if the user moved it off the default (0)
                if (value !== "0") {
                    formoutput += "<tr><td align='right'>" + name + "</td>";
                    formoutput += "<td class='outputdata'>" + value + "</td></tr>";
                }
                break;

            case "button":
            case "submit":
            case "reset":
                // skip
                break;

            default:
                if (value !== "") {
                    formoutput += "<tr><td align='right'>" + name + "</td>";
                    formoutput += "<td class='outputdata'>" + value + "</td></tr>";
                }
        }
    }

            formoutput += "</table>";
            document.getElementById("showInput").innerHTML = formoutput;
}

             //remove user input
            function removeReview() {
            document.getElementById("showInput").innerHTML = "";
}