// Array of special characters to be included in password
var specialCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
];

var passwordLength;
var options;


// Function to prompt user for password options
function getPasswordOptions() {
    passwordLength = prompt("How many characters would you like your password to contain?");
    console.log(passwordLength);

    if (passwordLength < 10) {
        alert("Password length must be at least 10 characters");
    } else if (passwordLength > 64) {
        alert("Password length must be at least 64 characters");
    } else {
        var specialOption = confirm("Click OK to confirm including special characters.");
        // console.log("Special characters YES");
        var numericOption = confirm("Click OK to confirm including numeric characters.");
        // console.log("Numeric characters YES");
        var lowerCaseOption = confirm("Click OK to confirm including lower case characters.");
        // console.log("Lower case characters YES");
        var upperCaseOption = confirm("Click OK to confirm including upper case characters.");
        // console.log("Upper case characters YES");
    };
    //if user select neither option 
    if (!specialOption && !numericOption && !lowerCaseOption && !upperCaseOption) {
        alert("You must choose a criteria");
        // if user select all the options
    } else if (specialOption && numericOption && lowerCaseOption && upperCaseOption) {
        options = specialCharacters.concat(numericCharacters, lowerCasedCharacters, upperCasedCharacters);
        console.log(options);
        // if user select only 3 options
    } else if (specialOption && numericOption && lowerCaseOption) {
        options = options = specialCharacters.concat(numericCharacters, lowerCasedCharacters);
        console.log(options);
    } else if (specialOption && numericOption && upperCaseOption) {
        options = specialCharacters.concat(numericCharacters, upperCasedCharacters);
        console.log(options);
    } else if (specialOption && lowerCaseOption && upperCaseOption) {
        options = specialCharacters.concat(lowerCasedCharacters, upperCasedCharacters);
        console.log(options);
    } else if (numericOption && lowerCaseOption & upperCaseOption) {
        options = numericCharacters.concat(lowerCasedCharacters, upperCasedCharacters);
        console.log(options);
        // if user select only 2 options
    } else if (specialOption && numericOption) {
        options = specialCharacters.concat(numericCharacters);
        console.log(options);
    } else if (specialOption && lowerCaseOption) {
        options = specialCharacters.concat(lowerCasedCharacters);
    } else if (specialOption && upperCaseOption) {
        options = specialCharacters.concat(upperCasedCharacters);
    } else if (numericOption && lowerCaseOption) {
        options = numericCharacters.concat(lowerCasedCharacters);
    } else if (numericOption && upperCaseOption) {
        options = numericCharacters.concat(upperCasedCharacters);
    } else if (lowerCaseOption && upperCaseOption) {
        options = lowerCasedCharacters.concat(upperCasedCharacters);
        // if user select only 1 option
    } else if (specialOption) {
        options = specialCharacters;
    } else if (numericOption) {
        options = numericCharacters;
    } else if (lowerCaseOption) {
        options = lowerCasedCharacters;
    } else if (upperCaseOption) {
        options = upperCasedCharacters;
    };
    getRandom();
};


// Function for getting a random element from an array
function getRandom(arr) {
    var storePassword = [];

    for (var i = 0; i < passwordLength; i++) {
        // var randomSpecial = specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
        // var randomNumeric = numericCharacters[Math.floor(Math.random() * numericCharacters.length)];
        // var randomLowerCased = lowerCasedCharacters[Math.floor(Math.random() * lowerCasedCharacters.length)];
        // var randomUpperCased = upperCasedCharacters[Math.floor(Math.random() * upperCasedCharacters.length)];
        var allOptions = options[Math.floor(Math.random() * options.length)];
        storePassword.push(allOptions);
    };
    var generatedPassword = storePassword.join("");
    console.log("The password is " + storePassword);

    return generatedPassword;
};


// Function to generate password with user input
function generatePassword() {
    getPasswordOptions();
    return getRandom();
};

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);