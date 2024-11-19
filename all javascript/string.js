console.log("welcome to string in javascript") 

// stings
// string are a collection of characters

const myName= "John Doe";
console.log(myName);
const myFavouriteFood= "Rice and Beans";
console.log(myFavouriteFood);

console.log(myName.length);

// string methods
// 1. toUpperCase()
// 2. toLowerCase()
// 3. indexOf()
// 4. lastIndexOf()
// 5. slice()
// 6. substring()
// 7. substr()

// 1. toUpperCase()
console.log(myName.toUpperCase());

// 2. toLowerCase()
console.log(myName.toLowerCase());

console.log('hello'.toUpperCase());

// 3. indexOf()
console.log(myName.indexOf("D"));

//  concat

console.log(myName.concat(" is a good boy"));

const theBestFootballer= "Ronaldo";
console.log(theBestFootballer.concat(" is a good boy"));

//padstart
console.log(theBestFootballer.padStart(10, "R"));

// padEnd
console.log(theBestFootballer.padEnd(10, "R"));

//replace
console.log(theBestFootballer.replace("Ronaldo", "Messi"));

const dburl ="https//www.google.com/<db_password>";
console.log(dburl.replace("db_password", "123456789"));
// split



// Assignment
// Question 1: Password Validator
// Write a function called validatePassword that takes a string as input and checks if it is a valid password based on the following criteria:

// Must be at least 8 characters long.
// Must contain at least one uppercase letter, one lowercase letter, and one number.
// Must not contain any spaces.
// If the password is valid, the function should return "Password is valid.", otherwise return "Password is not valid.".

//answer to the question

let password = "StrongPass1"; // Replace with any password to test

let hasUpperCase = false;
let hasLowerCase = false;
let hasNumber = false;
let hasSpace = false;

if (password.length < 8) {
    console.log("Password is not valid.");
} else {
    for (let i = 0; i < password.length; i++) {
        let char = password[i];

        if (char >= 'A' && char <= 'Z') {
            hasUpperCase = true;
        } else if (char >= 'a' && char <= 'z') {
            hasLowerCase = true;
        } else if (char >= '0' && char <= '9') {
            hasNumber = true;
        } else if (char === ' ') {
            hasSpace = true;
        }

        // Exit early if all conditions are met
        if (hasUpperCase && hasLowerCase && hasNumber) break;
    }

    if (hasUpperCase && hasLowerCase && hasNumber && !hasSpace) {
        console.log("Password is valid.");
    } else {
        console.log("Password is not valid.");
    }
}
