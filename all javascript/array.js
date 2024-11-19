consolelog('welcome to array in javascript');
const cars = ("lexus", "bmw", "toyota", "honda", "mercedes");
console.log(cars);
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);
console.log(cars[3]);
console.log(cars[4]);
console.log(cars[5]);

// baisic array methods
// 1. push()                        
// 2. pop()
// 3. shift()
// 4. unshift()
// 5. splice()

// 1. push()
cars.push("ferrari");
console.log( cars );

// 2. pop()
cars.pop();
console.log( cars);

// 3. shift()
cars.shift();
console.log( cars);

// 4. unshift()
cars.unshift("ferrari");
console.log( cars); 

// geting the length of an array
console.log(cars.length);


const clubs = ["real madrid", "barcelona", "manchester united", "liverpool", "chelsea"];
console.log(clubs);

// 5. splice()
clubs.splice(2, 1);
console.log(clubs);

// 6. slice()       
const newClubs = clubs.slice(1, 3);
console.log(newClubs);

// 7. join()
const newClubs2 = clubs.join(" ");
console.log(newClubs2);

// 8. concat()
const newClubs3 = clubs.concat(cars);
console.log(newClubs3);

// 9. reverse()
const newClubs4 = clubs.reverse();
console.log(newClubs4);

// array search methods

// // 1. indexOf()
// const (kopaTrophy) = clubs.indexOf("real madrid");
// console.log(kopaTrophy);

// //c 2. lastIndexOf()    
// const (kopaTrophy) = clubs.lastIndexOf("real madrid");
// console.log(kopaTrophy);

// // 3. includes()
// const (kopaTrophy) = clubs.includes("real madrid");
// console.log(kopaTrophy);

// // 4. find()
// const (kopaTrophy) = clubs.find("real madrid");
// console.log(kopaTrophy);

// // 5. findIndex()
// const (kopaTrophy) = clubs.findIndex("real madrid");
// console.log(kopaTrophy);
    