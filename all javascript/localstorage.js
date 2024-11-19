// local storage is used to store and retrieve data from the browser's local storage.
// It allows you to store key-value pairs in the browser's local storage.
// The data stored in local storage persists even after the browser is closed and reopened.

//store data in local storage

let user = {
    name: "John",
    age: 25,
    city: "New York"
    };

    localStorage.setItem("user", JSON.stringify(user));

//JSON - JavaScript Object Notation
//JSON.stringify() - converts a JavaScript object into a JSON string.
localStorage.setItem("user", JSON.stringify(user));

// Get (retrieve) data from local storage
let retrievedUser = localStorage.getItem("user");
console.log(retrievedUser);
console.log(retrievedUser.name);
console.log(retrievedUser.age);
console.log(retrievedUser.city);

