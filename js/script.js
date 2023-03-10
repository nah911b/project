const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");
form.addEventListener("submit", (e) => {
 e.preventDefault();

 checkInputs();

});

function checkInputs() {
 const usernameValue = username.value;
 const emailValue = email.value;
 const passwordValue = password.value;
 const passwordConfirmationValue = passwordConfirmation.value;

 if (usernameValue === "") {
   setErrorFor(username, "O nome de usu?rio ? obrigat?rio.");

 } else {
   setSuccessFor(username);

 }

 if (emailValue === "") {
   setErrorFor(email, "O email ? obrigat?rio.");

 } else if (!checkEmail(emailValue)) {
   setErrorFor(email, "Por favor, insira um email v?lido.");

 } else {
   setSuccessFor(email);

 }

 if (passwordValue === "") {

   setErrorFor(password, "A senha ? obrigat?ria.");

 } else if (passwordValue.length < 7) {

   setErrorFor(password, "A senha precisa ter no m?nimo 7 caracteres.");

 } else {

   setSuccessFor(password);

 }

 if (passwordConfirmationValue === "") {

   setErrorFor(passwordConfirmation, "A confirma??o de senha ? obrigat?ria.");

 } else if (passwordConfirmationValue !== passwordValue) {

   setErrorFor(passwordConfirmation, "As senhas n?o conferem.");

 } else {

   setSuccessFor(passwordConfirmation);

 }

 const formControls = form.querySelectorAll(".form-control");

 const formIsValid = [...formControls].every((formControl) => {

   return formControl.className === "form-control success";

 });

 if (formIsValid) {

   console.log("O formul?rio est? 100% v?lido!");

 }

}

function setErrorFor(input, message) {

 const formControl = input.parentElement;

 const small = formControl.querySelector("small");

 // Adiciona a mensagem de erro

 small.innerText = message;

 // Adiciona a classe de erro

 formControl.className = "form-control error";

}

function setSuccessFor(input) {

 const formControl = input.parentElement;

 // Adicionar a classe de sucesso

 formControl.className = "form-control success";

}

function checkEmail(email) {

 return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(

   email

 );

}
