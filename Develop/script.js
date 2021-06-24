// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//generate password function
function generatePassword(){
 var passLength=prompt("How many characters should the password contain? /n (Please choose a length between 8 and 128.) ");
 

}
