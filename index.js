// Dane Henrich B. Garcia
// 2023-66248
// CMSC 100 - U4L
// Exercise 03 - Javascript Basics Part 1


// 1. Function to validate if two passwords match and meet the required conditions.
function validatePassword(password1, password2) {
    // check if both passwords match
    if (password1 !== password2) {
        return false;
    }

    // check if password has at least 8 characters
    if (password1.length < 8) {
        return false;
    }

    // intialize for checking of having at least one number, uppercase, and lowercase
    let NumberChecker = false;
    let UpperCaseChecker = false;
    let LowerCaseChecker = false;

    // check if the characters in the password
    for (let i = 0; i < password1.length; i++) {
        let char = password1[i];
        
        // checck if the character is a number
        if (char >= '0' && char <= '9') {
            NumberChecker = true;
        }
        // check if the character is an uppercase letter
        else if (char >= 'A' && char <= 'Z') {
            UpperCaseChecker = true;
        }
        // checking if the character is a lowercase letter
        else if (char >= 'a' && char <= 'z') {
            LowerCaseChecker = true;
        }
    }

    // returns true only if the conditions are already met
    return NumberChecker && UpperCaseChecker && LowerCaseChecker;
}

// 2. Function for reversing the word
function reversePassword(password) {
    let reversedPassword = ''; // initialize an empty string to store the reversed password
    for (let i = password.length - 1; i >= 0; i--) { // reverse order
        reversedPassword += password[i]; // appending the characters at index i
    }
    return reversedPassword;
}

// 3. Function for storing the password to the object
function storePassword(name, password1, password2) {
    let newPassword; // initialize the new password
    
    // check if passwords are valid using validatePassword
    if (validatePassword(password1, password2)) {
        // reversing the password if valid
        newPassword = reversePassword(password1);
    } else {
        // the first password will be stored if the passwords are different from each other
        newPassword = password1;
    }

    // returning the object containing name and newPassword
    return {
        name: name,
        newpassword: newPassword
    };
}

// Test cases

// To check for the validity of password
console.log(validatePassword("helloworld", "hello")); // false - since no number and uppercase
console.log(validatePassword("hello", "hello")); // false - since no number and uppercase
console.log(validatePassword("hello1234", "hello1234")); // false - since no uppercase
console.log(validatePassword("Hello1234", "Hello1234")); // true - since all conditions are met
console.log(validatePassword("HELLO1234", "HELLO1234")); // false - since no lowercase

console.log(storePassword("John", "Pass1234", "Pass1234")); // {name: "John", newpassword: "4321ssaP"}
console.log(storePassword("John", "Pass123", "Pass12345")); // {name: "John", newpassword: "Pass123"}