// Assignment Code
var generateBtn = document.querySelector("#generate");
var generatePassword = ["iikekitesonsunnyday5846", "thebreezefeelsgreat#256", "beachdaysarethecoolest_56320", "sourpatchkidsarelife897!68"]

var writePassword = "ilikedogs$%^&2134"


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

console.log(generatePassword) ;


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function writepassword(){
  generatePassword + "slime"
}
