// Assignment code here

/* GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
*/


//Variables
var choices = [];
var length;
var lowerCaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
var upperCaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];
var numericalCharcater = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacter = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "[", "]", ":", "?", "<", ">", ";", "/", ":"];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//generatePassword function
function generatePassword() {

  // 1. Prompt the criteria for the password
    // a. Length of the password. No less than 8 and no more than 128
      var length = parseInt(window.prompt("How many character would you like you password to generate?"));

      if (length < 8 || length > 128) {
        window.alert("Your password length must be between 8 and 128 characters");
      }

    // b. Include lowercase characters
        if(window.confirm("Confirm using lowercase characters?")) {
          choices = choices.concat(lowerCaseChar);
         };

    // c. Include uppercase characters
      if(window.confirm("Confirm using uppercase characters?")) {
        choices = choices.concat(upperCaseChar);
       };

    //d. Include numeric characters
      if(window.confirm("Confirm using numbers?")) {
          choices = choices.concat(numericalCharcater);
         };

    // e. Include special characters
      if(window.confirm("Confirm using special characters?")) {
          choices = choices.concat(specialCharacter);
         };
  
  // 2. Generate a password
  var  newPassword = "";
   for (var i = 0; i <= length; i++) {
      console.log(newPassword);
      var randomValue = Math.floor(Math.random() * choices.length);
      newPassword = newPassword + choices[randomValue];
    }
    return newPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
