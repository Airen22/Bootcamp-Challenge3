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
    var lengthChoice = prompt("How many characters? (8-128)");
        lengthChoice = parseInt(lengthChoice);
// Validates that chosen length is in range
    function validateLengthChoice() {
        if (lengthChoice >= 8 && lengthChoice <=128) {
       console.log(lengthChoice);
        } else {
          alert("Invalid entry! Must select number between 8-128.");
        }
      };
      validateLengthChoice();

// User chooses characters to include in PW
    var charChoice = [];

    var upperConfirm = confirm("Include uppercase letters? (A, B, C, D, etc.)");
    console.log(upperConfirm);
    var lowerConfirm = confirm("Include lowercase letters? (a, b, c, d, etc.)");
    console.log(lowerConfirm);
    var numConfirm = confirm("Include numbers? (1, 2, 3, 4, etc.)");
    console.log(numConfirm);
    var symConfirm = confirm("Include symbols? (!, @, #, $, etc.)");
    console.log(symConfirm);

// Validates that at least one character type is chosen
    function validateCharacterChoice() {
        if (upperConfirm == true || lowerConfirm == true || numConfirm == true || symConfirm == true) {
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
            for (var i = 1; i <= lengthChoice; i++) {
            var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
            var indexUpper = Math.floor(Math.random()*upper.length);
            var upperChoice = upper[indexUpper];
            compChoice.push(upperChoice);
            }
        } 
        if (lowerConfirm == true) {
            for (var i=0; i<= lengthChoice* 0.25; i++) {
            var poppedUpper = compChoice.pop ();
            compChoice.unshift(poppedUpper.toLowerCase());
            }
        }
        if (numConfirm == true) {
            for (var i=0; i <= lengthChoice*0.25; i++) {
            var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
            var indexNum = Math.floor(Math.random()*num.length);
            var numChoice = num[indexNum];
            poppedUpper = compChoice.pop();
            compChoice.unshift(numChoice); 
        }
        }
        if (symConfirm == true) {
            for (var i=0; i <= lengthChoice*0.25; i++){
            var sym = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", '+', "-", ".", "~", "|", "<", ">", "=", "-", "_", "/", ":", ";", "?", "[", "]", "{", "}"];
            var indexSym = Math.floor(Math.random()*sym.length);
            var symChoice = sym[indexSym];
            poppedUpper = compChoice.pop();
            compChoice.unshift(symChoice);
            }
        }   
    
           return compChoice.sort(() => Math.random() -0.5);
        }
        var randomPassword = randomComp()
        return randomPassword.join("")
    }
   