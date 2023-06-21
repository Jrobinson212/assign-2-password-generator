// Assignment Code
var generateBtn = document.querySelector("#generate");

var characterLength = 8;
var lowerCase =  ["a","b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbol =["@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "~", "{", "}", "[", "]", "|", "/", "-", "="];
var upperCase = ["A", "B", "C","D", "E", "F","G","H", "I", "J", "K", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]



function getOptions(){
  var options = []
  characterLength = prompt("How many characters do you want your pasword to be? (8 - 128 characters");
  
  if(  characterLength < 8 || characterLength > 128) {
  
   alert ("charcter lentgth has to be greater than 8")
  return false;
  }

  if (confirm("Would you like to use lowcase letters?")) {
    options = options.concat(lowerCase);
  }

  if (confirm("Would you like to use Uppercase letters?")) {
    options = options.concat(upperCase);
  }

  if (confirm("Would you like to use numbers?")) {
    options = options.concat(number);
  }

  if (confirm("Would you like to use speacial charcters?")) {
    options= options.concat(symbol);
  }
  return options;
}



console.log(generateBtn)


// Write password to the #password input
function writePassword() {
  var options = getOptions();
  console.log(options)
  
  if(options){
    var password = generatePassword(options);
    var passwordText = document.querySelector("#password");
    
    passwordText.value = password;
  }
  
  // Add event listener to generate button
}

generateBtn.addEventListener("click", writePassword); 
 

function generatePassword(options){
 var password = " ";
 for (var i = 0; i < characterLength; i++) {
  var randomLetter = Math.floor(Math.random() * options.length);
  password = password + options[randomLetter];
 }
console.log(password)
return password;
}


