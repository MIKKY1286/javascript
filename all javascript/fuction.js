console.log=("welcome to javascript")
// DRY - dont repeat ur self
// fuction are a way to group code together and reuse it

// syntax of a function
// function functionName(parameters){

//}

// function declaration / function definition
// fuction sayHello(){
//     console.log("hello")
// }
// fuction calling
//sayHello()



//types of functions
// 1. function declaration / function definition
// 2. function expression
// 3. arrow function
// 4. anonymous function
// 5. named function

// 1. function declaration / function definition    


// class work

//write a fuction that calculate the area of a circle, takes the radius as an argument and returns the area of the circle

//write a fuction that calculate the area of a rectangle, takes the length and width as an argument and returns the area of the rectangle


//answer of class work

//write a fuction that calculate the area of a circle, takes the radius as an argument and returns the area of the circle

const pi = 3.14;
function calculateAreaOfCircle(radius){
    let area = Math.PI * radius * radius;
    return area;
}

console.log(calculateAreaOfCircle(5));

//write a fuction that calculate the area of a rectangle, takes the length and width as an argument and returns the area of the rectangle

function calculateAreaOfRectangle(length, width){
    let area = length * width;
    return area;
}
console.log(calculateAreaOfRectangle(5, 10));


//assignment

// Write a function that calculates the volume of a cylinder, take the radius and height as arguments and log the volume of the cylinder


function calculateCylinderVolume(radius, height) {
    // Formula for volume of a cylinder: V = π * r^2 * h
    const volume = Math.PI * Math.pow(radius, 2) * height;
    console.log(`The volume of the cylinder is: ${volume.toFixed(2)} cubic units`);
  }
  
  // Example usage:
  calculateCylinderVolume(5, 10); // Logs: The volume of the cylinder is: 785.40 cubic units
  
  
  
  
  //Write a function that calculates the area of a triangle, take the base and height as arguments and return the area of the triangle 
  
  
  
  function calculateTriangleArea(base, height) {
    // Formula for the area of a triangle: A = 0.5 * base * height
    const area = 0.5 * base * height;
    return area;
  }
  
  // Example usage:
  const area = calculateTriangleArea(10, 5);
  console.log(`The area of the triangle is: ${area} square units`); // Logs: The area of the triangle is: 25 square units
  

  // 3. arrow function
  const sayHello = () => {
    console.log("hello,  I am an arrow function");
  }
  sayHello();

  const sayHelloToUser = (name) => {
    console.log(`hello, ${name} I am an arrow function`);
  }
  sayHelloToUser("John");

  const summa = (85)

  // Write a program that display numbers from 1 to 100

//for every number that is a multiple of 3, display "Fizz" instead of the number

//for every number that is a multiple of 5, display "Buzz" instead of the number

// for every number that is a multiple of both 3 and 5, display "FizzBuzz" instead of the number

//answer


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