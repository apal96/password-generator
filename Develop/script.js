// Assignment Code
var generateBtn = document.querySelector("#generate");
// declaration of password characters to be used
var alphabetNumbers = "abcdegfhijklmnopqrstuvwxyz1234567890";
var letterNumbers = alphabetNumbers.split('')
var specialCharacters = "\!\@\#\$\%\^\&\*\(\)\_\-";
var specialChar = specialCharacters.split('')
//object for password options
var passOptions = {
  passwordLength: 0,
  specialCharConfirm: true,
  uppercaseConfirm: true,
  lowercaseConfirm:true,
}


// Write password to the #password input
function writePassword() {
  userPassSelctions();
  

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function userPassSelctions(){
  var passLength=prompt("How many characters should the password contain?) ");
  passOptions.passwordLength = passLength;
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
};
function generatePassword(){
 console.log(passOptions.specialCharConfirm)
 console.log(passOptions.uppercaseConfirm)
 console.log(passOptions.lowercaseConfirm)
 console.log(passOptions.passwordLength)
 if(passOptions.specialCharConfirm &&passOptions.uppercaseConfirm,passOptions.lowercaseConfirm ){
  //  for(var i = 0; i<alphabetNumbers.length;i++)
  //  var pass = Math.floor(Math.random()*alphabetNumbers.length)
  var alphaChar = randomGenerator(alphabetNumbers.length);
  console.log(alphaChar)
  //  console.log(alphabetNumbers[p])
  //  console.log(specialCharacters[p])
  //  console.log(alphabetNumbers.toUpperCase[p])


 }
 
};
function randomGenerator(key){
   var pass = Math.floor(Math.random()*key.length)
   return[key[pass]]

};