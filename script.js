// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

//arays of uppercase and lowercase

var possibleCharacter = [abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+]

//Create generatePassword
//Prompt user for password length
var pwLength = prompt("How many characters in your password?")
console.log(pwLength)
  //store password length in variable

 //confirm wheter user wants special characters
  //store in includeSpecial
  var includeSpecial = confirm("Would you like to use special characters"){
    if (includeSpecial)
  }

//confirm if the user wants numbers
 //store in includeNumber

var includeNumber = confirm("Would you like to use numbers?")
  console.log(includeNumber)

//confirm wheter user wants lowercase
 //store in includeLower
 var includeLower = confirm("Would you like to use lowercaseletters?")
  console.log(includeLower)
  
 //confirm wheter user wants uppercase
  //store in includeUpper
var includeUpper = confirm("Would you like to include uppercase letters?")
  console.log(includeUpper)


passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




//generate random password

function genernate(){

  //set password length/complexity

  let complexity = document.getElementById("slider").value;
  //possible password value
  let values = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+"

  let password = "";

  //create for loop to chose password character

  for(var i = 0; i<= complexity; i++){
    password = password + ValidityState.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
  }
//add password to textbox/display area

document.getElementById("display").values = password;




}