// Assignment Code
var generateBtn = document.querySelector("#generate");
var alphabet = "abcdegfhijklmnopqrstuvwxyz1234567890";
var letterNumbers = alphabet.split('')
var specialCharacters = "\!\@\#\$\%\^\&\*\(\)\_\-";
var specialChar = specialCharacters.split('')
console.log(specialChar);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log(passwordText.value)
  //generatePassword()

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//generate password function
function generatePassword(){
  var passLength=prompt("How many characters should the password contain?) ");
  console.log(passLength)
  if(passLength<8){
   alert("Password needs atleast 8 characters")
 }else if(passLength>128){
   alert("Password needs to be less than 128 characters")
 }else if(passLength>=8 && passLength<=128){
 var specialCharacter= confirm("Click OK to confirm using special characters");
 var upperCase = confirm("Click OK to confirm using upper case characters");
 var lowerCase = confirm("Click OK to confirm using lower case characters");
 if(specialCharacters && upperCase && lowerCase)   {
 for (var i=0;i<passLength;i++){
   var pass = Math.floor(Math.random()*passLength)
  specialChar[pass] ;
   return letterNumbers[pass]
 }
}


}else{
  alert("Please enter an integer between 8 and 128") 
}
}
function randomGenerator(){

}