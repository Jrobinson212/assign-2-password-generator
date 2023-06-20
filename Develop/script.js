// Assignment Code
var generateBtn = document.querySelector("generate");

var characterLength = 8;
var lowerCase =  ["a","b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q"];
var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbol =["@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "~", "{", "}", "[", "]", "|", "/", "-", "="];
var upperCase = ["A", "B", "C","D", "E", "F","G","H", "I", "J", "K", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var option1 = []






// Write password to the #password input
function writePassword() {
  // var preciseprompts = getPrompts();
  
  // if (preciseprompts){
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    
    passwordText.value = password;
  }
  
  // Add event listener to generate button
  
  generateBtn.addEventListener("click", writePassword); 
   
 

function generatePassword(){
 var password = " ";
 for (var i = 0; 1 < characterLength; i++) {
  var randomLetter = Math.floor(Math.random() = option1.length);
  password = password + option1[randomLetter];
 }
return password;
}



function getPrompts(){
  characterLength = prompt("How many characters do you want your pasword to be? (8 - 128 characters");
  
  if(characterLength || characterLength < 8 || characterLength > 128) {
  
   alert ("charcter lentgth has to be greater than 8")
  return false;
  }

  if (confirm("Would you like to use lowcase letters?")) {
    lowerCase = lowerCase.concat(lowerCase);
  }

  if (confirm("Would you like to use Uppercase letters?")) {
    upperCase = upperCase.concat(upperCase);
  }

  if (confirm("Would you like to use numbers?")) {
    number = number.concat(number);
  }

  if (confirm("Would you like to use speacial charcters?")) {
    symbol = symbol.concat(symbol);
  }
  return true;
}