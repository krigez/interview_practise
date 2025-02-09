// Understand object in js - 

// 1. Creating an Object: You can create an object using curly braces {} and defining key-value pairs inside.

// let person = {
//  name: 'John',
//  age: 25,
//  city: 'New York'
// };
// 2. Accessing Object Properties: You can access the values of an object using dot notation or square brackets.

// console.log(person.name); // Output: John
// console.log(person['age']); // Output: 25
// 3. Adding and Modifying Properties: You can add new properties or modify existing ones.

// person.job = 'Developer';
// person.age = 26;
// 4. Object Methods: You can include functions as values in an object, and these are called methods.

// let person = {
//  name: 'John',
//  greet: function() {
//    console.log('Hello, my name is ' + this.name);
//  }
// };
// person.greet(); // Output: Hello, my name is John
// 5. Deleting Properties: You can delete properties from an object using the delete keyword.

// delete person.city;
// 6. Object Iteration: You can loop through the keys or values of an object using for...in loop.

// for (let key in person) {
//  console.log(key + ': ' + person[key]);
// }

// Challenge

// Easy
// Write a function that takes a string and returns an object with the count of occurrences of each character.

// Input: "hello"
// Expected Output: {"h": 1, "e": 1, "l": 2, "o": 1}