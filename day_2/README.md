### *Day 2*
##  *Set 1*

### 1. Explain how the ternary operator works in JavaScript with an example.

The **ternary operator (? :)** is a shorthand for if-else.
*Syntax:*

condition ? expressionIfTrue : expressionIfFalse

*Example:*

let age = 20;
let message = (age >= 18) ? "Adult" : "Minor";
console.log(message); // Output: Adult

---

### 2. What are the logical operators in JavaScript? Give examples of how to use them.

*Logical Operators:*

* && (AND)
* || (OR)
* ! (NOT)

*Example:*

let x = 10, y = 20;
console.log(x > 5 && y > 15); // true
console.log(x > 15 || y > 15); // true
console.log(!(x > y)); // true

---

### 3. What is the purpose of the else if statement in an if-else block?

It checks *multiple conditions* when the first if is false.

*Example:*

let score = 75;
if (score >= 90) console.log("A");
else if (score >= 80) console.log("B");
else if (score >= 70) console.log("C");
else console.log("Fail");

---

### 4. How do the if, else if, and else statements differ in JavaScript? Provide an example of each.

* if: checks a condition.
* else if: checks another condition if the first fails.
* else: runs if all previous conditions are false.

*Example:*

let num = 0;
if (num > 0) console.log("Positive");
else if (num < 0) console.log("Negative");
else console.log("Zero");

---

##  *Set 2*

### 1. What is the difference between a for loop and a for...of loop in JavaScript? Give an example.

* for: used with a counter (numbers, indexes)
* for...of: used to iterate over *iterable objects* (arrays, strings)

*Example:*

// for loop
for (let i = 0; i < 3; i++) console.log(i);

// for...of loop
for (let value of [10, 20, 30]) console.log(value);

---

### 2. How does a for...in loop behave? Provide an example.

It iterates over *property names (keys)* of an object.

*Example:*

let person = { name: "Dipa", age: 21 };
for (let key in person) {
  console.log(key + ": " + person[key]);
}

---

### 3. What is the purpose of the break statement in loops? Give an example where it is useful.

It *exits the loop immediately*.

*Example:*

for (let i = 1; i <= 5; i++) {
  if (i === 3) break;
  console.log(i); // prints 1, 2
}

---

### 4. Describe the difference between while and do...while loops in JavaScript. Give an example.

* while: checks condition *before* loop body.
* do...while: checks condition *after* loop body (runs at least once).

*Example:*

let i = 0;
while (i < 3) {
  console.log(i);
  i++;
}

let j = 0;
do {
  console.log(j);
  j++;
} while (j < 3);

---

### 5. How does the for...of loop? Give an example.

Iterates through the *values* of an iterable object.

*Example:*

let colors = ["red", "green", "blue"];
for (let color of colors) {
  console.log(color);
}

---

##  *Set 3*

### 1. What is the difference between a function declaration and a function expression in JavaScript?

* *Function declaration*: hoisted (can be used before it’s defined)
* *Function expression*: not hoisted (must be defined before use)

*Example:*

// Declaration
function greet() { return "Hello"; }

// Expression
const greet2 = function() { return "Hi"; };

---

### 2. What is a recursive function? Provide an example of a recursive function for calculating factorial.

A *recursive function* calls itself.

*Example:*

function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5)); // Output: 120

---

### 3. Explain what default parameters are in a function. How do you use them in JavaScript?

They assign default values if arguments are missing.

*Example:*

function greet(name = "Guest") {
  console.log("Hello " + name);
}
greet();       // Hello Guest
greet("Nova"); // Hello Nova

---

### 4. What is the purpose of the return statement in a function? Provide an example.

It sends a *value back* to the caller.

*Example:*

function add(a, b) {
  return a + b;
}
let sum = add(3, 4);
console.log(sum); // 7

---

##  *Set 4*

### 5. When would you use a switch-case statement instead of an if-else block?

Use switch when comparing *one variable* against *many possible constant values*.

*Example:*

let day = 2;
switch (day) {
  case 1: console.log("Sunday"); break;
  case 2: console.log("Monday"); break;
  default: console.log("Other day");
}

---

### 6. What happens when a continue statement is used in a loop? How does it differ from break?

* continue: skips current iteration, continues next one.
* break: stops the loop completely.

*Example:*

for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i); // skips 3
}

---

### 7. How can you handle multiple conditions in a single if statement? Provide an example using logical operators.

Use **logical operators (&&, ||)** to combine conditions.

*Example:*

let age = 20;
let hasID = true;

if (age >= 18 && hasID) {
  console.log("Allowed");
} else {
  console.log("Not allowed");
}

---
# Set 5 - JavaScript Solutions

## 1. Check if Number is Positive, Negative, or Zero
*Example:*

function checkNumber(num) {
  return num > 0 ? 'Positive' : num < 0 ? 'Negative' : 'Zero';
}

console.log(checkNumber(5));   // Positive
console.log(checkNumber(-2));  // Negative
console.log(checkNumber(0));   // Zero

---

## 2. Check if Day is Weekday or Weekend
### Using if-else
*Example:*

function checkDayIfElse(day) {
  const lowercaseDay = day.toLowerCase();
  if (lowercaseDay === 'saturday' || lowercaseDay === 'sunday') {
    return 'Weekend';
  } else {
    return 'Weekday';
  }
}

console.log(checkDayIfElse('Monday'));  // Weekday
console.log(checkDayIfElse('Sunday'));  // Weekend


### Using switch-case
*Example:*

function checkDaySwitch(day) {
  switch (day.toLowerCase()) {
    case 'saturday':
    case 'sunday':
      return 'Weekend';
    default:
      return 'Weekday';
  }
}

console.log(checkDaySwitch('Friday'));   // Weekday
console.log(checkDaySwitch('Sunday'));   // Weekend


---

## 3. Sum of All Even Numbers in an Array (for...of loop)
*Example:*

function sumEvenNumbers(numbers) {
  let sum = 0;
  for (const num of numbers) {
    if (num % 2 === 0) {
      sum += num;
    }
  }
  return sum;
}

console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6])); // 12


---

## 4. Print Numbers 1–10 and Check Divisibility by 2 or 3 (while loop)
*Example:*
let i = 1;
while (i <= 10) {
  let message = `${i}`;
  if (i % 2 === 0 || i % 3 === 0) {
    message += ' - Divisible by 2 or 3';
  }
  console.log(message);
  i++;
}


---

## 5. Recursive Fibonacci Function
*Example:*

*function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(5)); // 5
console.log(fib(8)); // 21

---
