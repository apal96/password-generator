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
 var passLengthPrompt=prompt("How many characters should the password contain?) ");
 console.log(passLengthPrompt);
//  var minPassLength = 8;
//  var maxPassLength = 128;
 if(passLengthPrompt<8){
   alert("Password needs atleast 8 characters")
 }else if(passLengthPrompt>128){
   alert("Password needs to be less than 128 characters")
 }else{
 var specialCharacterConfirm = confirm("Click OK to confirm using special characters");
 var upperCaseConfirm = confirm("Click OK to confirm using upper case characters");
 var lowerCaseConfirm = confirm("Click OK to confirm using lower case characters");
}
}