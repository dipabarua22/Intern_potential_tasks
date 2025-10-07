# 🧠 TypeScript Q&A Guide
## ⚙️ Set 1

### 1. What is TypeScript and how is it different from JavaScript?
TypeScript is a **superset of JavaScript** that adds **static typing** and **compile-time checks**.  
It helps developers catch errors early and improve code maintainability.

**Difference:**
- JavaScript → dynamically typed  
- TypeScript → statically typed  
- TypeScript code compiles to JavaScript.

*2. What are type annotations in TypeScript? Provide an example.*
Type annotations tell the compiler what type a variable should have.

let age: number = 25;
let name: string = "Nova";

If you assign a different type later, TypeScript will show an error.

---

**3. What is the difference between let, const, and var in TypeScript?**

* var: function-scoped, can be redeclared.
* let: block-scoped, can be reassigned but not redeclared.
* const: block-scoped, cannot be reassigned.

var x = 10;
let y = 20;
const z = 30;

---

*4. What are interfaces in TypeScript? How do they help in defining object shapes?*
Interfaces define the *structure or shape* of an object.

interface Person {
  name: string;
  age: number;
}

let student: Person = { name: "Nova", age: 22 };

They help ensure that objects follow a specific structure.

---

**5. What does the any type represent in TypeScript? How does it affect type safety?**
any disables type checking for a variable — it can hold *any value*.

let data: any = "Hello";
data = 10; // No error

⚠️ It reduces type safety and should be avoided when possible.

---

## ⚙️ *Set 2*

*1. Difference between numeric enums and string enums in TypeScript.*

enum DirectionNum { Up, Down, Left, Right }  // Numeric (0,1,2,3)
enum DirectionStr { Up = "UP", Down = "DOWN" } // String enums

Numeric enums auto-increment values; string enums must assign explicit values.

---

*2. What is reverse mapping in TypeScript enums?*
Reverse mapping allows you to get the enum name from its numeric value.

enum Color { Red = 1, Green, Blue }
console.log(Color[1]); // Output: "Red"

Works only for numeric enums.

---

*3. How do computed members work in TypeScript enums?*
You can assign values using expressions:

enum FileAccess {
  None = 0,
  Read = 1 << 1,
  Write = 1 << 2,
  ReadWrite = Read | Write
}

---

*4. Can you mix string and numeric values in an enum?*
Yes, but *not recommended*. It causes confusion and disables reverse mapping.

enum Mixed { No = 0, Yes = "YES" }

---

*5. How do you define optional properties in an interface?*
Use ? to mark optional properties.

interface Student {
  name: string;
  age?: number; // optional
}

---

## 💡 *Set 3*

**1. Benefit of using strict equality (===) over loose equality (==)?**
=== checks *value and type*, avoiding unexpected type coercion.

5 == "5"  // true
5 === "5" // false

✅ Safer and more predictable.

---

*2. What is type coercion in JavaScript? How does TypeScript handle it?*
Type coercion automatically converts one type to another (like string → number).
TypeScript helps avoid coercion errors by enforcing strict type rules.

---

*3. What are union types in TypeScript? How are they different from interfaces?*
Union types allow a variable to hold *multiple possible types*.

let value: string | number;
value = "Hello";
value = 123;

Interfaces define object *structure*, not value types.

---

**4. What is the difference between void and never in TypeScript?**

* void: function returns *no value*.
* never: function *never returns* (throws error or infinite loop).

function log(): void { console.log("Hi"); }
function fail(): never { throw new Error("Error"); }

---

*5. How can you use type aliases in TypeScript?*
Type aliases give a *custom name* to a type.

type ID = string | number;

function getUser(id: ID) {
  console.log(id);
}

👉 Improves code readability and reusability.
