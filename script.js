// 1. Exploring Array Manipulation in JavaScript

// Task 1
let fruits = ['apple', 'banana', 'orange'];

fruits.push('strawberry');

console.log(fruits);



// Task 2
let numbers = [3, 1, 5, 2, 4];

numbers.sort();

console.log(numbers);

// Task 3
let double = numbers.map(num => num * 2);

console.log("the doubled values of", numbers, "are", double);

let odds = numbers.filter(num => num % 2 == 1);

console.log("the odd numbers of", numbers, "are", odds);

let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);


console.log("the sum of", numbers, "is", sum);


// 2. Exploring String Manipulation in JavaScript


// Task 1

let message = "Hello, World!";

console.log("The total of characters in 'Hello, World!' is", message.length);

// Task 2
console.log("The uppercase of 'Hello, World!' is", message.toUpperCase());
console.log("The lowercase of 'Hello, World!' is", message.toLowerCase());

// Task 3


let sentence = "The quick brown fox jumps over the lazy dog";

console.log(sentence.substring(7, 12));

// Task 4

console.log(sentence.split(" "));
