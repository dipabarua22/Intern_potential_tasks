//If-Else Statement:
let x = 10;
if (x>5){
    console.log("x is greater 5");
} else {
    console.log("x is less than or equal to 5");
}
//ELSE-IF STATEMENT
let Y= 10;
if (Y < 5) {
  console.log("x is less than 5");
} else if (Y === 10) {
  console.log("Y is equal to 10"); 
} else {
  console.log("Y is greater than 5");
}

//sWITCH statment
let num = 3;
switch (num) {
  case 1:
    console.log("One");
    break;
  case 2:
    console.log("Two");
    break;
  default:
    console.log("Three");
}


//For loops:

for (let i = 0; i < 5; i++) { console.log(i); }


//For…of loops:

const arr = [1, 2, 3, 4];
for (const value of arr) { console.log(value); }


//For…in loops:

const obj = { a: 1, b: 2, c: 3 };
for (const key in obj) { console.log(key, obj[key]); }

//While loops:

let i = 0;
while (i < 5) {
  console.log(i); // 0, 1, 2, 3, 4
  i++;
}

//Do…while loops:

let k = 0;
do {
  console.log(k); // 0, 1, 2, 3, 4
  k++;
} while (k < 5);


//Function Declaration:

function greet(name) { return `Hello, ${name}!`; }
console.log(greet('Alice'));


//Function Expression:

const add = function(a, b) {
    return a + b;
};
console.log(add(5, 3));


//Arrow Function:

const addition = (a, b) => {
    return a + b;
};
console.log(addition(5, 3));


//Function Default Parameters:

function greet(name = 'Guest') {
  return `Hello, ${name}!`;
}
console.log(greet('Alice')); 
console.log(greet());

//Recursive Function:

function countUp(n, target) {
     if (n > target) {
        return;
    }
    console.log(n);
    countUp(n + 1, target);
}

countUp(1, 5);

