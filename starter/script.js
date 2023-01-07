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

// Function to prompt user for password options
function getPasswordOptions() {
    var specialOption;
    if (confirm("Click OK to confirm including special characters.")) {

    } else {
        alert("Cancel");
    };

    var numericOption;
    if (confirm("Click OK to confirm including numeric characters.")) {
        alert("OK")
    } else {
        alert("Cancel");
    };

    var lowerCaseOption;
    if (confirm("Click OK to confirm including lower case characters.")) {
        alert("OK")
    } else {
        alert("Cancel");
    };

    var uppercaseOption;
    if (confirm("Click OK to confirm including upper case characters.")) {
        alert("OK")
    } else {
        alert("Cancel");
    };
};


// Function for getting a random element from an array
function getRandom(arr) {

    for (var i = 0; i < arr.length; i++) {
        var randomSpecial = specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
        console.log(randomSpecial);
        var randomNumeric = numericCharacters[Math.floor(Math.random() * numericCharacters.length)];
        console.log(randomNumeric);
        var randomLowerCased = lowerCasedCharacters[Math.floor(Math.random() * lowerCasedCharacters.length)];
        console.log(randomLowerCased);
        var randomUpperCased = upperCasedCharacters[Math.floor(Math.random() * upperCasedCharacters.length)];
        console.log(randomUpperCased);
    }
};

// Function to generate password with user input
function generatePassword() {
    var lengthOption = prompt("How many characters would you like your password to contain?");
    if (lengthOption <= 10) {
        alert("Password length must be at least 10 characters");
    } else if (lengthOption >= 64) {
        alert("Password length must be at least 10 characters");
    } else {
        getPasswordOptions();
    }
    // return getRandom();
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