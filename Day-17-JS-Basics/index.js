// ===============================
// Day 17 - JavaScript Basics 🚀
// ===============================

// 1. Console Output
console.log("Hi, myself Dua Zameer 👋");

// -------------------------------
// 2. Variables (var, let, const)
// -------------------------------

// var (function scoped)
function varExample() {
  var age = 25;
  console.log("Var age:", age);
}
varExample();

// let (block scoped)
{
  let a = 10;
  console.log("Block let a:", a);
}

let a = 20;
a = 30;
console.log("Updated let a:", a);

// const (cannot be reassigned)
const constantValue = 28;
console.log("Const value:", constantValue);

// -------------------------------
// 3. Dynamic Typing
// -------------------------------
let variable = 10;
console.log("Number:", variable);

variable = "Dua";
console.log("String:", variable);

variable = true;
console.log("Boolean:", variable);

variable = null;
console.log("Null:", variable);

// -------------------------------
// 4. Simple Variable Example
// -------------------------------
let num = 20;
console.log("Final number:", num);