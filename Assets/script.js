
var characterAmountRange = document.getElementById("characterAmountRange");
var characterAmountNumber = document.getElementById("characterAmountNumber");
var form = document.getElementById("passwordGeneratorForm");
var passwordDisplay = document.getElementById("passwordDisplay");

// character codes in ASCII to avoid listing each character 
var UPPERCASE_CHAR_CODES = arrayFormLowToHigh(48, 57);
var SYMBOLS_CHAR_CODES = arrayFormLowToHigh(33, 47).concat(arrayFormLowToHigh(58, 64).concat
(arrayFormLowToHigh(91, 96)).concat(arrayFormLowToHigh(123, 126))
)
var LOWERCASE_CHAR_CODES = arrayFormLowToHigh(65, 90);
var NUMBER_CHAR_CODES = arrayFormLowToHigh(97, 122);


characterAmountNumber.addEventListener("input", syncCharacterAmount);
characterAmountRange.addEventListener("input", syncCharacterAmount);
var includeLowercaseElement = document.getElementById("includeLowercase");
var includeUppercaseElement = document.getElementById("includeUppercase");
var includeNumberElement = document.getElementById("includeNumber");
var includeSymbolsElement = document.getElementById("includeSymbols");


// main function for password generation based on user input
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

// creates password array from user values using char codes, then converts and joins them into one string
function generatePassword(characterAmount, includeLowercase, includeNumber, includeSymbols, includeUppercase) {
    var charCodes = []
    if (includeLowercase) charCodes = charCodes.concat(LOWERCASE_CHAR_CODES)
    if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
    if (includeNumber) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
    if (includeSymbols) charCodes = charCodes.concat(SYMBOLS_CHAR_CODES) 
    
    var passwordCharacters = []
    for (var i = 0; i < characterAmount; i++) {
        var characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
        passwordCharacters.push(String.fromCharCode(characterCode))
    }
    return passwordCharacters.join('')
}

// a loop to finds character sets for each type
function arrayFormLowToHigh(low, high) {
    var array = []
    for (var i = low; i <= high; i++) {
    array.push(i)
    }
    return array
}

// synchronizes values in slider and number box
function syncCharacterAmount(e) {
    var value = e.target.value;
    characterAmountNumber.value = value; 
    characterAmountRange.value = value;
}
