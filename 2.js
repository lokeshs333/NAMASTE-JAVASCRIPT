// console.log(x);
console.log(n);
// if we try to print any variable before it was declared 
// then it have the value undefined 
// but in the case of function it will show the content of function
// becase whole code is copied in the memory.
printname();
var n = 2;
function printname(){
    console.log("lokesh pandey");
    
}
console.log(n);
printname();

console.log(printname);