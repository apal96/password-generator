// Assignment Code
var generateBtn = document.querySelector("#generate");
// declaration of password characters to be used
var alphabetNumbers = "abcdegfhijklmnopqrstuvwxyz1234567890";
var letterNumbers = alphabetNumbers.split('')
var upperA = alphabetNumbers.toUpperCase();
var upperCaseA = upperA.split('')
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
  // console.log(passLength)
  if(passLength<8){
   alert("Password needs atleast 8 characters")
  }else if(passLength>128){
   alert("Password needs to be less than 128 characters")
  }else if(passLength>=8 && passLength<=128){
    passOptions.specialCharConfirm= confirm("Click OK to confirm using special characters");
    // console.log(passOptions.specialCharConfirm)
    passOptions.uppercaseConfirm = confirm("Click OK to confirm using upper case characters");
    // console.log(passOptions.uppercaseConfirm)
    passOptions.lowercaseConfirm= confirm("Click OK to confirm using lower case characters");
    // console.log(passOptions.lowercaseConfirm)
  }else{
  alert("Please enter an integer between 8 and 128") 
  }
};
function generatePassword(){
//  console.log(passOptions.specialCharConfirm)
//  console.log(passOptions.uppercaseConfirm)
//  console.log(passOptions.lowercaseConfirm)
//  console.log(passOptions.passwordLength)
  var randomAlphNum = randomGenerator(alphabetNumbers);
  var randomSpecialChar = randomGenerator(specialCharacters);
  var randomUpperCase = randomGenerator(upperA);
  function randomArray(passw){
    var array = ["randomAlphNum","randomSpecialChar","randomUpperCase"]
    var arrayGen = Math.floor(Math.random()*passw.length);
    console.log(passw[arrayGen])
    return passw[arrayGen]
  }

 if(passOptions.specialCharConfirm &&passOptions.uppercaseConfirm,passOptions.lowercaseConfirm ){
  
  for(var i=0; i<passOptions.passwordLength;i++){
    randomArray(i);
    console.log(i)

  }
  // console.log(randomAlphNum)
  // console.log(randomSpecialChar)
  // console.log(randomUpperCase.toUpperCase())
 }
 
};
function randomGenerator(key){
   var pass = Math.floor(Math.random()*key.length)
   //console.log(key[pass])

   return key[pass]
   
};