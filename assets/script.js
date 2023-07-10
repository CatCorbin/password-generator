// Assignment code here
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var number = "0123456789";
var specialCharacter = "!@#$%^&*()_-+=/<>,.?:;~*";
var password = [];
var passwordCount = password.length;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  //Questions asked to the user to tell us their password criteria
  var pass = "";
  var noCharacters = prompt ("Choose password length between 8 and 128 characters.");
  var upperRequest = confirm ("Does your passsword require uppercase letters?");
  var lowerRequest = confirm ("Does your password require lowercase letters?");
  var numberRequest = confirm ("Does your password require numbers?");
  var specialRequest = confirm ("Does your password require any special characters?");
  
  if (upperRequest === true) {
    pass = pass.concat(upper)
  };

  if (lowerRequest === true) {
    pass = pass.concat(lower)
  };

  if (numberRequest === true) {
    pass = pass.concat(number)
  };

  if (specialRequest === true) {
    pass = pass.concat(specialCharacter)
  };

  for(var i=0;i<noCharacters.length;i++){
    pass = Math.floor(Math.random() * noCharacters.length)
  };
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);