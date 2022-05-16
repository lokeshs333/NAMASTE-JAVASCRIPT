// below line will show an error....
console.log(b);
// here you will get this message
// Cannot access 'b' before initialization
/*here also hoisting will take place but in the case of let and const 
variable are not stored in global scope rather they save or occupy memory 
in another place that is the scrit in chrome browser..*/
//the gap between this is also known as temporal dead zone..

let b = 2;

console.log(a);
/*it is having the value undefined because
in javascipt all the variable and the function have 
been assigned the memory first (memory part )after that
the code execution part will take place where it will be 
assigned the value..(due to hoisting)*/
var a = 2;
as();
console.log(a);
function as()
{
    console.log("hello man how are you?");
}
as();
