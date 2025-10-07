import promptSync from "prompt-sync";
const prompt = promptSync();

const a = parseFloat(prompt("Enter first number: "));
const b = parseFloat(prompt("Enter second number: "));
const operation = prompt("Choose operation (+, -, *, /): ");

let result;
if (operation === "+") result = a + b;
else if (operation === "-") result = a - b;
else if (operation === "*") result = a * b;
else if (operation === "/") result = b !== 0 ? a / b : "Error: Division by zero";
else result = "Invalid operator";

console.log("Result:", result);
