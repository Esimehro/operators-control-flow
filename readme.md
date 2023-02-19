<!-- Question 1. Symbols for each of the below Javascript operators; -->

- Arithmetic Operators:
    Addition operator +	
    Subtraction operator -	
    Multiplication operator *	
    Exponentiation operator **	
    Division operator /	
    Modulo (Division Remainder) operator %	
    Increment operator ++	
    Decrement operator --

- Assignment Operators:
    To assign values = 
    Addition assignment operator +=
    Subtraction assignment operator -=
    Multiplication assignment operator *=
    Division assignment operator /=
    Modulo assignment operator %=
    Exponential assignment operator**=

- Comparison Operators:
    Loose equality operator ==
    Strict equality operator ===
    Inequality operator !=
    Strict inequality operator !==
    Greater than operator >
    Less than operator <
    Greater than or equal to operator >=
    Less than or equal to operator <=
    Tenary operator ? :

- Logical Operators:
    Logical and &&
    Logical or ||
    Logical not !

- Bitwise Operators:
    And &
    Or |
    XOR  ^	
    NOT ~
    Zero fill left shift <<	
    Signed right shift   >>	
    Zero fill right shift >>>	


<!-- Question 2. For each JavaScript Operator, write 2 examples. -->

A) Arithmetic Operator

- Exponentiation operator **
Example 1:
  let a = 9;
  let b = 3;
console.log(a ** b); 
<!-- 729 -->

Example 2:
  let x = 7;
  let y = 5;
console.log(x ** y);
<!-- 16807 -->

- Modulo (Division Remainder) operator %
Example 1:
  let a = 127;
  let b = 8;
console.log(a / b); 
<!-- 15.875 -->

Example 2:
  let x = 35;
  let y = 7;
console.log(x / y);
<!-- 5 -->

B) Assignment Operators

- Addition assignment operator +=
Example 1:
   let f = "hello";
   console.log(f += " world");
   <!-- hello world -->

Example 2:
   let a = 7;
   let b = 3;
   console.log(a += b);
   <!-- 10 -->

- Subtraction assignment operator -=
Example 1:
   let x = 20;
   console.log(x -= 5);
   <!-- 15 -->

Example 2:
   let a = 7;
   console.log(a -= 3);
   <!-- 4 -->

C) Comparison Operators

- Strict equality operator ===
Example 1:
console.log('hello' === 'hello');
<!-- true -->

Example 2:
console.log(1000 === "1000");
<!-- false -->

-  Greater than or equal to operator >=
Example 1:
let x = 12;
console.log(x >= 12);
<!-- true -->

Example 2:
let a = 50;
console.log(a >= 165);
<!-- false -->

D) Logical Operators

- And && 
Example 1:
let a = 3;
let b = -2;

console.log(a > 0 && b > 0);
<!-- false -->

Example 2:
let x = 20;
let y = 2;

console.log(x >= 20 && y <= 2);
<!-- true -->

- OR ||
Example 1:
let num1 = 4;
let num2 = 27;

console.log(num1 <= 15 || num2 >= 420);
<!-- true -->

Example 2:
let a  = 40;
let b = 3;

console.log(a === 7 || b === '3');
<!-- false -->

E) Bitwise operators


<!-- Question 4 -->

for (let i = 1; i < 20; i += 7){
  console.log(i);
}
 <!-- i = 1, 8, 15 -->