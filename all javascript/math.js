 // the math object in js is a built in object that has properties and methods for mathematical constants and functions
         // the math object is not a constructor
         // the math object is static


         // Euler's number 
         console.log(Math.E);

         // square root of 2
         console.log(Math.SQRT2);

         // square root of 1/2
         console.log(Math.SQRT1_2);

         // natural logarithm of 2
         console.log(Math.LN2);

         // natural logarithm of 10
         console.log(Math.LN10);

         // round(x) - rounds 'x' to the nearest integer
         console.log(Math.round(4.7));
         console.log(Math.round(8.5));
         console.log(Math.round(8.4));

         // ceil(x) - rounds 'x' up to its nearest integer
         console.log(Math.ceil(4.7));
         console.log(Math.ceil(8.5));
         console.log(Math.ceil(8.4));

         // floor(x) - rounds 'x' down to its nearest integer
         console.log(Math.floor(4.7));  
         console.log(Math.floor(8.5));
         console.log(Math.floor(8.4));

         //trunch(x) - truncates 'x' to its nearest integer
         console.log(Math.trunc(4.7));
         console.log(Math.trunc(8.5));
         console.log(Math.trunc(8.4));

         // sign(x) - returns the sign of 'x'
         console.log(Math.sign(-4));
         console.log(Math.sign(4));
         console.log(Math.sign(0));

         // random - return a number btween 0(inclusive) and 1(exclusive)
         console.log(Math.random());
         // 1 - 10
 
         console.log(Math.floor(Math.random() * 10) + 1);

         // pow - returns the value of 'x' to the power of 'y'
         console.log(Math.pow(2, 3));
         // 2 to the power of 3
         // 2 * 2 * 2

         // math.sqrt - returns the square root of 'x'
         console.log(Math.sqrt(16));
         // 4

         // math.abs - returns the absolute value of 'x'
         console.log(Math.abs(-4));

         // math.min - returns the smallest value in a list of arguments
         console.log(Math.min(0, 150, 30, 20, -8, -200));
         // -200

         /// math.max - returns the largest value in a list of arguments
         console.log(Math.max(0, 150, 30, 20, -8, -200));
         // 150