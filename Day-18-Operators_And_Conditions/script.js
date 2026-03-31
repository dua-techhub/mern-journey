// ================================
// JavaScript Operators and Loops Examples
// ================================

// --------------------
// 1. Arithmetic Operators
// --------------------
let a = 2;
let b = 5;

console.log("Arithmetic Operators:");
console.log("a + b =", a + b);   // Addition
console.log("a - b =", a - b);   // Subtraction
console.log("a * b =", a * b);   // Multiplication
console.log("a / b =", a / b);   // Division
console.log("a % b =", a % b);   // Modulus
console.log("a ** b =", a ** b); // Exponentiation (power)

// --------------------
// 2. Increment and Decrement
// --------------------
console.log("\nIncrement & Decrement:");
console.log("Pre-increment (++a):", ++a); // Increases first
console.log("Post-increment (a++):", a++); // Uses first, then increases
console.log("Value after post-increment:", a);

console.log("Post-decrement (a--):", a--); // Uses first, then decreases
console.log("Value after post-decrement:", a);

console.log("Pre-decrement (--a):", --a); // Decreases first

// --------------------
// 3. Assignment Operator
// --------------------
let c = 9;
console.log("\nAssignment Operator:");
console.log("c =", c);

// --------------------
// 4. Comparison Operators
// --------------------
console.log("\nComparison Operators:");
console.log("a > b:", a > b);   // Greater than
console.log("a < b:", a < b);   // Less than
console.log("a >= b:", a >= b); // Greater than or equal
console.log("a <= b:", a <= b); // Less than or equal

// --------------------
// 5. Equality Operators
// --------------------
console.log("\nEquality Operators:");
console.log("'5' == 5:", '5' == 5);   // Loose equality
console.log("'5' === 5:", '5' === 5); // Strict equality

// --------------------
// 6. Conditional (Ternary) Operator
// --------------------
let age = 20;
let canVote = (age >= 18) ? "Yes, can vote" : "No, too young";
console.log("\nTernary Operator:");
console.log("Can vote?", canVote);

// --------------------
// 7. If-Else Statement
// --------------------
console.log("\nIf-Else Statement:");
const hour = new Date().getHours();
let greeting;

if (hour < 12) {
    greeting = "Good Morning";
} else if (hour < 18) {
    greeting = "Good Afternoon";
} else {
    greeting = "Good Evening";
}
console.log(greeting);

// --------------------
// 8. Switch Statement
// --------------------
console.log("\nSwitch Statement:");
let day;
let date = new Date().getDay(); // 0-6

switch (date) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
  default:
    day = "Unknown Day";
}
console.log(day);

// --------------------
// 9. Loops
// --------------------
console.log("\nFor Loop:");
for (let i = 0; i < 5; i++) {
  console.log("The number is " + i);
}

console.log("\nWhile Loop:");
let j = 0;
while (j < 5) {
  console.log("Number (while): " + j);
  j++;
}

console.log("\nDo-While Loop:");
let k = 0;
do {
  console.log("Number (do-while): " + k);
  k++;
} while (k < 5);
// Break
for (let i = 1; i<=6; i++){
if (i==4) {
    break
    
} else {
    console.log(i)
}
1   }
// continue
for (let i = 1; i<=6; i++){
if (i==3) {
    continue
    
} else {
    console.log(i)
}
1   }
 
