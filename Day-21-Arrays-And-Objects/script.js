// =========================================
// Day 21 - JavaScript Arrays & Objects
// =========================================

// -----------------------------
// ARRAYS
// -----------------------------

// 1. Creating Arrays
let numbers = [1, 2, 3, 4, 5];
let fruits = ["Apple", "Banana", "Mango"];

// 2. Accessing Elements
console.log("First fruit:", fruits[0]);

// 3. Modifying Elements
fruits[1] = "Orange";
console.log("Updated fruits:", fruits);

// 4. Array Methods

// push() - add at end
fruits.push("Grapes");

// pop() - remove last
fruits.pop();

// shift() - remove first
fruits.shift();

// unshift() - add at beginning
fruits.unshift("Pineapple");

console.log("Modified fruits:", fruits);

// 5. Looping through Arrays

console.log("Using for loop:");
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

console.log("Using forEach:");
numbers.forEach(function(num) {
  console.log(num);
});

// 6. map() - create new array
let doubled = numbers.map(num => num * 2);
console.log("Doubled:", doubled);

// 7. filter() - condition based
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even Numbers:", evenNumbers);

// 8. reduce() - sum
let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum:", sum);

// 9. find()
let found = numbers.find(num => num > 3);
console.log("First > 3:", found);

// -----------------------------
// OBJECTS
// -----------------------------

// 1. Creating Object
let person = {
  name: "Dua",
  age: 20,
  city: "Sahiwal"
};

// 2. Accessing Properties
console.log("Name:", person.name);
console.log("City:", person["city"]);

// 3. Updating Properties
person.age = 21;

// 4. Adding New Property
person.country = "Pakistan";

console.log("Updated Person:", person);

// 5. Deleting Property
delete person.city;

// 6. Object Methods
let student = {
  name: "Ali",
  marks: 85,
  greet: function() {
    console.log("Hello, my name is " + this.name);
  }
};

student.greet();

// 7. Looping through Object
for (let key in student) {
  console.log(key, ":", student[key]);
}

// 8. Object.keys(), values(), entries()
console.log("Keys:", Object.keys(student));
console.log("Values:", Object.values(student));
console.log("Entries:", Object.entries(student));

// -----------------------------
// ARRAY OF OBJECTS
// -----------------------------

let users = [
  { id: 1, name: "Ali", age: 22 },
  { id: 2, name: "Sara", age: 25 },
  { id: 3, name: "Ahmed", age: 20 }
];

// Access
console.log("First user:", users[0].name);

// Loop
users.forEach(user => {
  console.log(user.name, "-", user.age);
});

// Filter users age > 21
let adults = users.filter(user => user.age > 21);
console.log("Adults:", adults);

// Map names
let names = users.map(user => user.name);
console.log("Names:", names);

// -----------------------------
// DESTRUCTURING
// -----------------------------

let { name, age } = person;
console.log("Destructured:", name, age);

// Array destructuring
let [first, second] = numbers;
console.log("First two numbers:", first, second);

// -----------------------------
// SPREAD OPERATOR
// -----------------------------

let arr1 = [1, 2];
let arr2 = [3, 4];

let combined = [...arr1, ...arr2];
console.log("Combined:", combined);

// Copy object
let newPerson = { ...person };
console.log("Copied Object:", newPerson);

// -----------------------------
// END OF DAY 21
// -----------------------------