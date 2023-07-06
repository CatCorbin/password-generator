// Assignment code here
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lower = "abcdefghijklmnopqrstuvwxyz".split("");
var number = "0123456789".split("");
var specialCharacter = "!@#$%^&*()_-+=/<>,.?:;~*".split("");
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
  var pass = [""];
  var noCharacters = prompt ("Choose password length between 8 and 128 characters.");
  var upperRequest = confirm ("Does your passsword require uppercase letters?");
  var lowerRequest = confirm ("Does your password require lowercase letters?");
  var numberRequest = confirm ("Does your password require numbers?");
  var specialRequest = confirm ("Does your password require any special characters?");

  if (upperRequest === true) {
    pass.concat(upper)
  };

  if (lowerRequest === true) {
    pass.concat(lower)
  };

  if (numberRequest === true) {
    pass.concat(number)
  };

  if (specialRequest === true) {
    password = pass.concat(specialCharacter)
  };
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
