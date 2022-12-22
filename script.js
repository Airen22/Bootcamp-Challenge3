// Assignment code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

// Add event listener to genrate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
    // must return a string value that is the password.
    // prompt user to choose num b/w 8 and 128
        // var to save lenght
        // validate user num
    // confirm user upper, lower, num, special characters (4 confirm prompts)
    // 4 var to save T/F to include characters
    // vars that include all user options of each category. Array of string for each cat.
    // var upper = ["A", "B"]
    // If user says yes to include that cat choose random elements from the array
        // How to decide how many elements to choose from each array
    // Validate that at lease one cat was chosen
    // Join chosen elements into a string
    return passwordString;

}