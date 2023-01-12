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

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


function generatePassword() {
  
    // 1. Prompt the criteria for the password
      // a. Length of the password. No less than 8 and no more than 128
        var length = window.prompt("How many character would you like you password to generate?");

      // b. Include lowercase characters
        var lowercaseChar =window.confirm("Confirm using lowercase characters?");

      // c. Include uppercase characters
       var uppercaseChar = window.confirm("Confirm using uppercase characters?");

      //d. Include numeric characters
        var numericalCharcater = window.confirm("Confirm using numerical characters?");

      // e. Include special characters
        var SpecialCharacter = window.confirm("Confrim using special characters?");


    // 2. Validate the password criteria
    if (length >= 8 && length <= 128) {

    }
    else {
      window.alert("Your password length must be between 8 and 128 characters");
    }
    
    // 3. Generate a password
    // 4. Display passsword onto screen
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");



  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
