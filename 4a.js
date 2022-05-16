var a = 2;
var a = 100;
// we can redeclare and can also update value in var
console.log(a);
let b = 3;
b = 333;
// we can update let but we cannot redeclare this let..
// let b = 333;
// Identifier 'b' has already been declared
console.log(b);

const c = 3.14;
// we cannot either redeclare or update the const..
// const c = 33;
// yntaxError: Identifier 'c' has already been declared
// c = 333;
// TypeError: Assignment to constant variable.
console.log(c);