console.log("welcome to conditonal JS ")
// conditionals in javascript
// 1. simole if statement
// 2. if else statement
// 3. if else if statement
// 4. switch statement

// 1. simole if statement
// if(condition){   
//     // code to be executed if condition is true
// }
 
let haveMoney= true;
if(haveMoney){
    console.log("i will buy a new phone");
}

let myAge= 16;
if(myAge>=18){
   console.log("i can vote");
}

// 2. if else statement
// if(condition){   
    // code to be executed if condition is true
// }else{
//     // code to be executed if condition is false
// }

let isRaining= true;
if(isRaining){
    console.log("i will not go out");
}else{
    console.log("i will go out");
}

// compound if else statement
// if(condition is true){
//     // code to be executed if condition is true
// }else if(condition is true){
//     // code to be executed if condition is true
// }else{
    // statement to execute
//}

let myJambScore= 190;
if(myJambScore>=200){
    console.log("You are going to university");
}else if(myJambScore>=160 && myJambScore<200){
    console.log("You are going to polytechnic");
}else if(myJambScore>=120 && myJambScore<200){
    console.log("You are going to college");
}else{
    console.log("Dey go ur mama");
}
// nested if else statement
// if(condition is true){   
    // code to be executed if condition is true
//     if(condition is true){
//         // code to be executed if condition is true
//     }else{
//         // code to be executed if condition is false
//     }
// }else{
    // code to be executed if condition is false
    // if(condition is true){
    // code to be executed if condition is true 
    // }else{
        // code to be executed if condition is false
    // }
// }
let jamscore=200;
let postutme=50;


if (jamscore >= 200) {
    console.log("You are going to university");
    if (postutme >= 50) {
        console.log("You are going to fedral university");
    } else {
        console.log("You are not going to  state university");
    }
}
else if (jamscore >= 160 && jamscore < 200) {
    console.log("You are going to polytechnic");
    if (postutme >= 50) {
        console.log("You are going to polytechnic university");
    } else {
        console.log("You are not going to  state polytechnic");
    }
}   else if (jamscore >= 120 && jamscore < 200) {
    console.log("You are going to college");
    if (postutme >= 50) {
        console.log("You are going to college university");
    } else {
        console.log("You are not going to  state college");
    }
}
else {
    console.log("Dey go ur mama");
}


// write a javascript code that log the following messages  to the console:


// "positive and even" if the number is positive and even,
// " positive and odd" if the number is positive and odd,
// "negative" if the number is negative,
// "zero" if the number is zero


//answer

//function isEven(num) {
  //  return num % 2 === 0;
//}

//function isPositive(num) {
  //  return num > 0;
//}

//function checkNumber(num) {
    //if (num === 0) {
      //  console.log("zero");
    //} else if (isPositive(num)) {
        //if (isEven(num)) {
          //  console.log("positive and even");
        //} else {
        //    console.log("positive and odd");
      //  }
    //}  else {
    //    console.log("negative");
  //  }
//}

// Example usage:
//checkNumber(5);  // Logs: "positive and odd"
//checkNumber(-3); // Logs: "negative"
//checkNumber(8);  // Logs: "positive and even"
//checkNumber(0);  // Logs: "zero"





let number = 17;
if (number > 0) {
    if (number % 2 === 0) {
        console.log("positive and even");
    } else {
        console.log("positive and odd");
    }
} else if (number < 0) {  

    console.log("negative");
}
else {
    console.log("zero");
}




/*
Assigment:
You are developing a program for a bookstore's inventory system that categorizes books based on their genre, publication year, and availability status. The program should determine the discount rate for a customer based on these three factors.

If the book is a Science Fiction:

If it was published before 2000:
If it's in stock, the discount is 20%.
If it's out of stock, the discount is 15%.
If it was published in or after 2000:
If it's in stock, the discount is 10%.
If it's out of stock, the discount is 5%.

If the book is a Romance:

If it was published before 2010:
If it's in stock, the discount is 25%.
If it's out of stock, the discount is 20%.
If it was published in or after 2010:
If it's in stock, the discount is 15%.
If it's out of stock, the discount is 10%.

For all other genres:

If it was published before 2005:
If it's in stock, the discount is 30%.
If it's out of stock, the discount is 25%.
If it was published in or after 2005:
If it's in stock, the discount is 20%.
If it's out of stock, the discount is 15%.
Write a program using nested if statements that takes the genre, publication year, and availability status as inputs and outputs the appropriate discount rate for the customer. Ensure to handle edge cases and provide meaningful output.

Example Input/Output:
Input: Genre = "Science Fiction", Year = 1998, Status = "in stock"

Output: "The discount rate for this book is 20%."
Input: Genre = "Romance", Year = 2015, Status = "out of stock"

Output: "The discount rate for this book is 10%."
*/


// answer //


// Inputs
let genre = "Science Fiction";
let year = 1998;
let status = "in stock";

// Normalize the input to ensure case insensitivity
genre = genre.toLowerCase();
status = status.toLowerCase();

let discount = 0;

// Science Fiction Genre
if (genre === "science fiction") {
    if (year < 2000) {
        if (status === "in stock") {
            discount = 20;
        } else {
            discount = 15;
        }
    } else {  // Year is 2000 or later
        if (status === "in stock") {
            discount = 10;
        } else {
            discount = 5;
        }
    }
}

// Romance Genre
else if (genre === "romance") {
    if (year < 2010) {
        if (status === "in stock") {
            discount = 25;
        } else {
            discount = 20;
        }
    } else {  // Year is 2010 or later
        if (status === "in stock") {
            discount = 15;
        } else {
            discount = 10;
        }
    }
}

// Other genres
else {
    if (year < 2005) {
        if (status === "in stock") {
            discount = 30;
        } else {
            discount = 25;
        }
    } else {  // Year is 2005 or later
        if (status === "in stock") {
            discount = 20;
        } else {
            discount = 15;
        }
    }
}
console.log(`The discount rate for this book is ${discount}%.`);




//for every number that is a multiple of 3, display "Fizz" instead of the number

