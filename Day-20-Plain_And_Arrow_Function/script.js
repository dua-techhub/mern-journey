// Functions
function saymyName(params) {
  console.log("Dua Zameer");
}
// Function Use-Function call
saymyName();
// counting function
function printCounting() {
  for (let i = 1; i <= 100; i++) {
    console.log(i);
  }
}
printCounting();
// Print Number
function printNumber(num) {
  console.log("Printing Number", num);
}
printNumber(3);
// finding average
function getAverage(num1, num2) {
  let avg = (num1 + num2) / 2;
  console.log("Average is:", avg);
}
getAverage(3, 78);

// return function
function getSum(a, b, c) {
  let sum = a + b + c;
  return sum;
}
let ans = getSum(1, 2, 3);
console.log(ans);
function getmyName(firstname, lastname) {
  let fullName = firstname + "" + lastname;
  return fullName;
}
let fullName = getmyName("Dua", "Zameer");
console.log(fullName);
// without Function Call we cant use that function
// after return statement all the code is unreachable statement

function getMultiplication(a, b) {
  return a * b;
}
console.log(getMultiplication(2, 12));

// let solve = function (a, b) {
//   return a * b;
// };
// console.log(getMultiplication(2, 12));
// Arrow Function

let solve = (a, b) => {
  return a * b;
};
console.log(solve(2, 12));
