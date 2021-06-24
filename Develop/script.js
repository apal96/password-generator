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
 var passLengthPrompt=prompt("How many characters should the password contain?\n(Please choose a length between 8 and 128 characters.) ");
 var specialCharacterConfirm = confirm("Click to confirm using special characters");
 var upperCaseConfirm = confirm("Click to confirm using upper case characters");
 var lowerCaseConfirm = confirm("Click to confirm using lower case characters");




}