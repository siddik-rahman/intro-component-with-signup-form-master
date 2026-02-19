const form = document.querySelector("form");
const fname = document.querySelector("#fname");
const lname = document.querySelector("#lname");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
 
form.addEventListener("submit", (e) => {
    e.preventDefault();
    if(fname.value.trim() === "") {
        fname.placeholder= "First name cannot be empty";
        fname.classList.add("error") = "hsl(0, 100%, 74%)";
   
    } else {
        fname.placeholder= "First Name";
        fname.classList.remove("error");
       
    }
    if(lname.value.trim() === "") {
        lname.placeholder = "Last name cannot be empty";
        lname.classList.add("error") = "hsl(0, 100%, 74%)";
    } else {
        lname.placeholder = "Last Name";
        lname.classList.remove("error");
    }
    if(email.value.trim() === "") {
        email.placeholder= "Looks like this is not an email";
        email.classList.add("error") = "hsl(0, 100%, 74%)";
    } else {
        email.placeholder= "Email";
        email.classList.remove("error");
    }
    if(password.value.trim() === "") {
        password.placeholder = "Password cannot be empty";
        password.classList.add("error") = "hsl(0, 100%, 74%)";
    } else {
        password.placeholder = "Password";
        password.classList.remove("error");
    }
      
});