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

function userPassSelctions(specialCharacter,upperCase,lowerCase){
  var passLength=prompt("How many characters should the password contain?) ");
  console.log(passLength)
  if(passLength<8){
   alert("Password needs atleast 8 characters")
  }else if(passLength>128){
   alert("Password needs to be less than 128 characters")
  }else if(passLength>=8 && passLength<=128){
    passOptions.specialCharConfirm= confirm("Click OK to confirm using special characters");
    console.log(passOptions.specialCharConfirm)
    passOptions.uppercaseConfirm = confirm("Click OK to confirm using upper case characters");
    console.log(passOptions.uppercaseConfirm)
    passOptions.lowercaseConfirm= confirm("Click OK to confirm using lower case characters");
    console.log(passOptions.lowercaseConfirm)
  }else{
  alert("Please enter an integer between 8 and 128") 
  }
}