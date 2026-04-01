// =====================================
// STRINGS + LOOPS (Complete Practice)
// =====================================

// -----------------------------
// 1. String Basics
// -----------------------------
let name = "Dua Zameer";

console.log("Original Name:", name);
console.log("Length:", name.length);
console.log("Uppercase:", name.toUpperCase());
console.log("Lowercase:", name.toLowerCase());
console.log("Character at index 2:", name.charAt(2));

// -----------------------------
// 2. Loop through a String
// -----------------------------
console.log("\nLoop through each character:");

for (let i = 0; i < name.length; i++) {
    console.log("Index", i, ":", name[i]);
}

// -----------------------------
// 3. Reverse a String using loop
// -----------------------------
let reversed = "";

for (let i = name.length - 1; i >= 0; i--) {
    reversed += name[i];
}

console.log("\nReversed String:", reversed);

// -----------------------------
// 4. Count vowels in a string
// -----------------------------
let text = "JavaScript is Amazing";
let vowels = "aeiouAEIOU";
let count = 0;

for (let i = 0; i < text.length; i++) {
    if (vowels.includes(text[i])) {
        count++;
    }
}

console.log("\nText:", text);
console.log("Vowel Count:", count);

// -----------------------------
// 5. Using for...of loop
// -----------------------------
console.log("\nUsing for...of loop:");

for (let char of text) {
    console.log(char);
}

// -----------------------------
// 6. String splitting + loop
// -----------------------------
let sentence = "Learn JavaScript step by step";
let words = sentence.split(" ");

console.log("\nWords in sentence:");

for (let i = 0; i < words.length; i++) {
    console.log(words[i]);
}

// -----------------------------
// 7. While loop example
// -----------------------------
console.log("\nWhile loop example:");

let i = 0;
while (i < words.length) {
    console.log("Word:", words[i]);
    i++;
}

// -----------------------------
// 8. Pattern using loops
// -----------------------------
console.log("\nPattern:");

let pattern = "";

for (let i = 1; i <= 5; i++) {
    pattern += "*";
    console.log(pattern);
}

// -----------------------------
// 9. Check palindrome
// -----------------------------
let str = "madam";
let isPalindrome = true;

for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
        isPalindrome = false;
        break;
    }
}

console.log("\nIs Palindrome:", isPalindrome);
