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
  var noCharacters = prompt("Choose password length between 8 and 128 characters.");
  if (noCharacters >= 8 && noCharacters <= 128) {

    var upperRequest = confirm("Does your passsword require uppercase letters?");
    var lowerRequest = confirm("Does your password require lowercase letters?");
    var numberRequest = confirm("Does your password require numbers?");
    var specialRequest = confirm("Does your password require any special characters?");

    if (upperRequest === false && lowerRequest === false && numberRequest === false && specialRequest === false) {
      alert("Must select at least one character type")
      return ""
    }
    for (var i = 0; i < noCharacters; i++) {
      if (upperRequest === true && pass.length<noCharacters) {
        var randomIndex = Math.floor(Math.random() * 26)
        pass = pass.concat(upper[randomIndex])
      };

      if (lowerRequest === true && pass.length<noCharacters) {
        var randomIndex = Math.floor(Math.random() * 26)
        pass = pass.concat(lower[randomIndex])
      };

      if (numberRequest === true && pass.length<noCharacters) {
        var randomIndex = Math.floor(Math.random() * 10)
        pass = pass.concat(number[randomIndex])
      };

      if (specialRequest === true && pass.length<noCharacters) {
        var randomIndex = Math.floor(Math.random()) * 24
        pass = pass.concat(specialCharacter[randomIndex])
      };
    };

  }
  else {
    alert("Size must be 8-128")
  }
  return pass
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);