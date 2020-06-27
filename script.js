// Assignment Code
var generateBtn = document.querySelector("#generate");


// WORKSPACE //


// The final function goal : return a random string set to user chosen length and from user chosen character sets//
function generatePassword() {

  // defining character set arrays//
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = lowerCase.toUpperCase();
  var symbols = ["!","@","#","$","%","^","&","*","(",")","-","+","=","_","`","~"];
  var numbers = "0123456789";

  // defining an array where character sets will be added to //
  var useTheseCharacters = [];

  // defining an array where random characters (from chosen characters sets) will be added to //
  var output = [];

  // defining a function that enters chosen character set arrays into useTheseCharacters array //
  function enterCharacterSets(){
    if (yesLowercase) {
      for( var i=0; i < lowerCase.length; i++ ) {
        useTheseCharacters.push(lowerCase[i]);
      }
    } 
    if (yesUppercase) {
      for( var i=0; i < upperCase.length; i++ ) {
        useTheseCharacters.push(upperCase[i]);
      }
    } 
    if (yesSymbols) {
      for( var i=0; i < symbols.length; i++ ) {
        useTheseCharacters.push(symbols[i]);
      }
    } 
    if (yesNumbers) {
      for( var i=0; i < numbers.length; i++ ) {
        useTheseCharacters.push(numbers[i]);
      }
    } 
  }

  // first prompt for length of password //
  var howLong = prompt("How many characters long would you like your password? Choose a number between 8 - 128.")

  // validator to ensure input is useable //
  while (howLong < 8 || howLong > 128 || isNaN(howLong)) {
    var howLong = prompt("Choose a number within 8 - 128.")
  }

  // 4 confirms to choose character set and running the function to add them in final array //  
  var yesLowercase = confirm("Would you like lowercase characters in your password?");
  var yesUppercase = confirm("Would you like uppercase characters in your password?");
  var yesSymbols = confirm("Would you like symbols in your password?");
  var yesNumbers = confirm("Would you like numbers in your password?");
  enterCharacterSets();

  // validator to ensure at least one character set is chosen //
  while (useTheseCharacters.length === 0) {
    alert("Please choose AT LEAST one of the character sets.");
    var yesLowercase = confirm("Would you like lowercase characters in your password?");
    var yesUppercase = confirm("Would you like uppercase characters in your password?");
    var yesSymbols = confirm("Would you like symbols in your password?");
    var yesNumbers = confirm("Would you like numbers in your password?");
    enterCharacterSets();
  }

  // loop set to howLong var (user choosen length) choosing a random character (from useTheseCharacter array) and pushing it to output array //
  for(var i=0; i < howLong; i++) {
    var randomGenerator = useTheseCharacters[Math.floor(Math.random() * (useTheseCharacters.length))];
    output.push(randomGenerator);
  }

  // joining output array into one string and returning for final output of generatePassword//
    return (output.join(""))


}

// WORKSPACE END //



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);