/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


//let result = "5" - 2;
// Bug 1: "5" - 2 results in implicit type conversion (string "5" is converted to number).
// Fix: Ensure both operands are numbers using Number().
let result = Number("5") - 2;
console.log("The result is: " + result); // Expected output: 3


//let isValid = Boolean("false");
// Bug 2: Boolean("false") returns true because any non-empty string is truthy.
// Fix: Convert the string explicitly to a boolean based on its content.
let isValid = ("false" === "true");
if (isValid) {
    console.log("This is valid!");
} else {
    console.log("This is NOT valid!"); // Expected output
}

let age = "25";
// Bug 3: age is a string, and the "+" operator concatenates instead of adding numbers.
// Fix: Convert age to a number before performing addition.
//let totalAge = age + 5;
let totalAge = Number(age) + 5;
console.log("Total Age: " + totalAge);  // Expected output: 30

//Implicit Type Conversion Example
let implicitExample = "10" * 2;
console.log("Implicit Conversion:", implicitExample); // Output: 20 (string "10" is implicitly converted to a number)

//Explicit Type Conversion Example
let explicitExample = "42";
console.log(explicitExample, typeof (explicitExample));
let explicitNum = Number(explicitExample);
console.log("Explicit Conversion:", explicitNum, typeof explicitNum); // Output: 42 'number'

// Converting null to a number
let numValue = null;
console.log(numValue);
console.log("Number(null):", Number(null)); // Output: 0

