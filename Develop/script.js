// Assignment Code
var generateBtn = document.querySelector("#generate");
// declaration of password characters to be used
var alphabetNumbers = "abcdegfhijklmnopqrstuvwxyz1234567890";
var letterNumbers = alphabetNumbers.split('')
var specialCharacters = "\!\@\#\$\%\^\&\*\(\)\_\-";
var specialChar = specialCharacters.split('')
//object for password options
var passOptions = {
  specialCharConfirm: true,
  uppercaseConfirm: true,
  lowercaseConfirm:true,
}

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
