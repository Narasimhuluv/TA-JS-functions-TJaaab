// -ook at the example below and do the same for other problems.

/*
Write a function named convertToString that accepts a number and converts the number into a string (hint: use String()) and return the converted value.

Do the following for the given problem:
*/

// - Write a Function Decleration
function convertToString(n) {
  return String(n);
}
convertToString(12)

// - Write a Function Expression
let convertToString = function (n) {
  return String(n);
};
convertToString(10)

// - Write an Arrow Function without curly brackets (if possible)
let convertToString = (n) => String(n);
convertToString(10)

// - Write an Arrow Function with curly brackets
let convertToString = (n) => {
  return String(n);
};
convertToString(10)

// - Execute the function
convertToString(21);

// - Execute the function and store the return value in a variable.
let returnValue = convertToString(23);

// - What is the typeof returnValue
// typeof returnValue is "string"

/* 1. Add one to the given value

Write a function named `addOne` that accepts a number, adds one to the given value and`return` it(hint: use return keyword).

Do the following with above problem.
*/

// - Write a Function Declaration
function addOne(n){
  return n + 1
}
let message = addOne(10)

// - Write a Function Expression
const addOne = function add(n){
  return n + 1
}
let message = addOne(10)

// - Write an Arrow Function without curly brackets(if possible)
const addOne = (n) => n + 1;
let message = addOne(10)
// - Write an Arrow Function with curly brackets
const addOne = (n) => {
  return n + 1
}
let message = addOne (10)


// - Execute the function

// - Execute the function and store the return value in a variable.

// - What is the typeof returnValue
// it is an variable

/* 2. Subtract one

Write a function named `substractOne` that accepts a number, substracts one from the given value and return it. (hint: use return keyword)

Do the following with above problem.
*/

// - Write a Function Declaration

// - Write a Function Expression

// - Write an Arrow Function without curly brackets(if possible)

// - Write an Arrow Function with curly brackets

// - Execute the function

// - Execute the function and store the return value in a variable.

// - What is the typeof returnValue

function substractOne(n){
  return n - 1
}

const substractOne = function sub(n){
  return n - 1
}
const substractOne = (n) => n - 1;

const substractOne = (n) => {
  return  n-1
}
let message = substractOne(5)

/* 3. Add two numbers

Write a function named `sum` that accepts two numbers and returns the sum of them.

Do the following with above problem.
*/

// - Write a Function Declaration

// - Write a Function Expression

// - Write an Arrow Function without curly brackets(if possible)

// - Write an Arrow Function with curly brackets

// - Execute the function

// - Execute the function and store the return value in a variable

// - What is the typeof returnValue

function sum(a,b){
  return a + b
}
const sum = function sumTwo(a,b){
  return a + b
}
const sum = function(a,b){
  return a + b
}
const  sum = (a,b) => a + b ;
const sum = (a,b) =>{
  return a + b
}
let message = sum (10,20)

/* 4. Square of the given value

Write a function named `square` that accepts a number and returns the square of the number.

Do the following with above problem.
*/

// - Write a Function Declaration

// - Write a Function Expression

// - Write an Arrow Function without curly brackets(if possible)

// - Write an Arrow Function with curly brackets

// - Execute the function

// - Execute the function and store the return value in a variable

// - What is the typeof returnValue

function square(n){
  return n ** 2
}

const square = function squareTwo(n){
  return n**2
}
const square = function(n){
  return n ** 2
}

const square = (n) => n ** 2

const square = (n) =>{
  return n ** 2
}
let message = square(3)

/* 5. Find isGreater

Write a function named isGreater that accepts two numbers`x` and`y` and returns`true` if x is greater than y or return `false`.

Do the following with above problem.
*/

// - Write a Function Declaration

// - Write a Function Expression

// - Write an Arrow Function without curly brackets(if possible)

// - Write an Arrow Function with curly brackets

// - Execute the function

// - Execute the function and store the return value in a variable

// - What is the typeof returnValue

function isGreater(x,y){
  return x > y || x < y
}
const isGreater = function great_lessor(x,y){
  return x > y || x < y
}

const isGreater = function(x,y){
  return x>y || x<y
}

const isGreater = (x,y) => x>y || x<y;

const isGreater = (x,y) => {
  return x>y || x<y
}
let message = isGreater(10,8)

/* 6.

Write a function named `oddOrEven` that accepts a`number` and returns

  - `Number is odd` for odd number
  - `Number is even` for even number.

Do the following with above problem.
*/

// - Write a Function Declaration

// - Write an anonymous Function Expression

// - Write an named Function Expression

// - Write an Arrow Function without curly brackets (hint: use ternary operator)

// - Write an Arrow Function with curly brackets

// - Execute the function

// - Execute the function and store the return value in a variable

// - What is the typeof returnValue

function oddOrEven(n){
  if(n % 2 ===0){
    return `Number is Even`
  }else{
    return `Number is Odd`
  }
}
let message = oddOrEven(10)

const oddOrEven = function oddOrEven(n){
  if(n%2== 0){
    return `Number is Even`
  }else{
    return `Number is odd`
  }
}
let message = oddOrEven(13)

const oddOrEven = function(n){
  if(n%2 !==0){
    return `Number is Even`
  }else{
    return `Number is odd`
  }
}
let message = oddOrEven(15)

const oddOrEven = (n) => {
  if(n % 2 === 0){                                                                                                               
    return `Number is Even`
  }else{
    return `Number is odd`
  }
}
let message = oddOrEven(18)

const oddOrEven = (n) => n % 2 === 0 ? `Number is even` : `Number is odd`;
let message = oddOrEven(15)
 
  

