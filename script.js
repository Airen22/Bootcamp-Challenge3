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
    // function chooseLength () {
    var lengthChoice = prompt("How many characters? (8-128)");
        lengthChoice = parseInt(lengthChoice);
// Validates that chosen length is in range
    function validateLengthChoice() {
        if (lengthChoice >= 8 && lengthChoice <=128) {
       console.log(lengthChoice);
        } else {
          alert("Invalid entry! Must select number between 8-128.");
          chooseLength();
        }
      };
      validateLengthChoice();
        // }
    // chooseLength();

// User chooses characters to include in PW
    // function chooseChars () {
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
        }
      };
      validateCharacterChoice();
//Computer chooses random characters   
    var compChoice = [];
    function randomComp () {
        if(upperConfirm == true){
             var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
            var indexUpper = Math.floor(Math.random()*upper.length);
            var upperChoice = upper[indexUpper]
        }
        if (lowerConfirm == true) {
            var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
            var indexLower = Math.floor(Math.random()*lower.length);
            var lowerChoice = lower[indexLower];    
        }
        if (numComfirm == true) {
            var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
            var indexNum = Math.floor(Math.random()*num.length);
            var numChoice = num[indexNum]; 
        }
        if (symConfirm == true) {
            var sym = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", '+', "-", ".", "~", "|", "<", ">", "=", "-", "_", "/", ":", ";", "?", "[", "]", "{", "}"];
            var indexSym = Math.floor(Math.random()*sym.length);
            var symChoice = sym[indexSym];
        }   
            compChoice.push(upperChoice)
            compChoice.push(lowerChoice)
            compChoice.push(numChoice)
            compChoice.push(symChoice)
            compChoice.sort(() => Math.random() - 0.5);
        }
// ----------How to make it repeat until the chosen length is reached-------------
    for (var i = 0; i <= lengthChoice*.25; i++)
    randomComp();
            console.log(compChoice.join(""))

    }

// ----------How to call writepassword function-----------------    