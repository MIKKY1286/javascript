// Create a 20-Array Matrix (20x1 Matrix)
const matrix20 = [];

for (let i = 0; i < 20; i++) {
  matrix20.push([i + 1]); // Each array contains a single value (1 to 20)
}

console.log("20-Array Matrix:", matrix20);

// Define a 3x3 matrix
let matrix3x3 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// Access the element in the second row, third column
let element = matrix3x3[1][2]; // Row index 1, Column index 2 (0-based indexing)
console.log("Element in the second row, third column:", element); // Should print 6

// Initialize sum
let sum = 0;

// Loop through the 3x3 matrix to print all elements and calculate sum
for (let i = 0; i < matrix3x3.length; i++) {
  for (let j = 0; j < matrix3x3[i].length; j++) {
    console.log(`Element at row ${i + 1}, column ${j + 1}:`, matrix3x3[i][j]);
    sum += matrix3x3[i][j]; // Add the element to the sum
  }
}

// Print the sum of all elements in the 3x3 matrix
console.log("Sum of all elements in the 3x3 matrix:", sum);
