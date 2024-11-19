// Write a program that display numbers from 1 to 100

//for every number that is a multiple of 3, display "Fizz" instead of the number

//for every number that is a multiple of 5, display "Buzz" instead of the number

// for every number that is a multiple of both 3 and 5, display "FizzBuzz" instead of the number

//answer

// Write a program that display numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (
        i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
} 