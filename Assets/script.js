// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
var characterAmountRange = document.getElementById("characterAmountRange");
var characterAmountNumber = document.getElementById("characterAmountNumber");
var form = document.getElementById("passwordGeneratorForm");
var passwordDisplay = document.getElementById("passwordDisplay");
// var includeLowercase = document.getElementById("includeLowercase");
// var includeUppercase = document.getElementById("includeUppercase");
// var includeSymbols = document.getElementById("includeSymbols");
// var includeNumber = document.getElementById("includeNumber");

var UPPERCASE_CHAR_CODES = arrayFormLowToHigh(65, 90);
var SYMBOLS_CHAR_CODES = arrayFormLowToHigh(33, 47).concat(arrayFormLowToHigh(58, 64).concat
(arrayFormLowToHigh(91, 96)).concat(arrayFormLowToHigh(123, 126))
)
var LOWERCASE_CHAR_CODES = arrayFormLowToHigh(97, 122);
var NUMBER_CHAR_CODES = arrayFormLowToHigh(48, 57);

characterAmountNumber.addEventListener("input", syncCharacterAmount);
characterAmountRange.addEventListener("input", syncCharacterAmount);
var includeLowercaseElement = document.getElementById("includeLowercase");
var includeUppercaseElement = document.getElementById("includeUppercase");
var includeNumberElement = document.getElementById("includeNumber");
var includeSymbolsElement = document.getElementById("includeSymbols");



form.addEventListener('submit', e => {
    e.preventDefault()
    var characterAmount = characterAmountNumber.value
    var includeLowercase = includeLowercaseElement.checked
    var includeUppercase = includeUppercaseElement.checked
    var includeNumber = includeNumberElement.checked
    var includeSymbols = includeSymbolsElement.checked
    var password = generatePassword(characterAmount, includeUppercase, includeLowercase, includeSymbols, includeNumber)
    passwordDisplay.innerText = password 
})

function generatePassword(characterAmount, includeLowercase, includeNumber, includeSymbols, includeUppercase) {
    var charCodes = LOWERCASE_CHAR_CODES
    if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
    if (includeNumber) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
    if (includeSymbols) charCodes = charCodes.concat(SYMBOLS_CHAR_CODES) 
    
    const passwordCharacters = []
    for (let i = 0; i < characterAmount; i++) {
        var characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
        passwordCharacters.push(String.fromCharCode(characterCode))
    }
    return passwordCharacters.join('')
}

function arrayFormLowToHigh(low, high) {
    const array = []
    for (let i = low; i <= high; i++) {
    array.push(i)
    }
    return array
}

function syncCharacterAmount(e) {
    var value = e.target.value;
    characterAmountNumber.value = value; 
    characterAmountRange.value = value;
}