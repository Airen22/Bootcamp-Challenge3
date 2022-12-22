// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
// User chooses length
    function chooseLength () {
    var lengthChoice = prompt("How many characters? (8-128)");
        lengthChoice = parseInt(lengthChoice);
// Validates that chosen lenght is in range
    function validateLengthChoice() {
        if (lengthChoice >= 8 && lengthChoice <=128) {
       console.log(lengthChoice);
        } else {
          alert("Invalid entry! Must select number between 8-128.");
          chooseLength();
        }
      };
      validateLengthChoice();
        }
    chooseLength();
// User chooses characters to include in PW
    function chooseChars () {
    var upperConfirm = confirm("Include uppercase letters? (A, B, C, D, etc.)");
    console.log(upperConfirm);
    var lowerConfirm = confirm("Include lowercase letters? (a, b, c, d, etc.)");
    console.log(lowerConfirm);
    var numComfirm = confirm("Include numbers? (1, 2, 3, 4, etc.)");
    console.log(numComfirm);
    var symConfirm = confirm("Include symbols? (!, @, #, $, etc.)");
    console.log(symConfirm);
// Validates that at least one character type is chosen
    function validateCharacterChoice() {
        if (upperConfirm == true || lowerConfirm == true || numComfirm == true || symConfirm == true) {
        return ;
        } else {
          alert("Invalid entry! Must select at least one character type.");
          chooseChars();
        }
      };
      validateCharacterChoice();   
    }
    chooseChars();
    
// Array for each character type

const upper ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function generateUpper(length) {
    let resultUpper = ' ';
    const upperLength = upper.length;
    for ( let i = 0; i < length; i++ ) {
        resultUpper += upper.charAt(Math.floor(Math.random() * upperLength));
    }

    return resultUpper;
}
console.log(generateUpper(120));

const lower ='abcdefghijklmnopqrstuvwxyz';

function generateLower(length) {
    let resultLower = ' ';
    const lowerLength = lower.length;
    for ( let i = 0; i < length; i++ ) {
        resultLower += lower.charAt(Math.floor(Math.random() * lowerLength));
    }

    return resultLower;

}
console.log(generateLower(120));

const num ='0123456789';

function generateNum(length) {
    let resultNum = ' ';
    const numLength = num.length;
    for ( let i = 0; i < length; i++ ) {
        resultNum += num.charAt(Math.floor(Math.random() * numLength));
    }

    return resultNum;

}
console.log(generateNum(120));

const sym ='!@#$%^&*()<>?:;{}[]|~`';

function generateSym(length) {
    let resultSym = ' ';
    const symLength = sym.length;
    for ( let i = 0; i < length; i++ ) {
        resultSym += sym.charAt(Math.floor(Math.random() * symLength));
    }

    return resultSym;

}
console.log(generateSym(120));

    // function randomChoice () {
    // var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
    // function upperComp (length) {
    //     var uppercomp = "";
    //     var indexUpper = Math.floor(Math.random()*upper.length);
    // var upperChoice = upper[indexUpper];

    // alert(upperChoice);
    // var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    // var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    // var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", '+', "-", ".", "~", "|", "<", ">", "=", "-", "_", "/", ":", ";", "?", "[", "]", "{", "}"];
    // }
    // randomChoice()


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
    // return passwordString;
}