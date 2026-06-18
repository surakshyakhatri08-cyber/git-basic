//hoisting

//variable
console.log(x);
var x = 10;
console.log(x);

//js understand
// var x;
// console.log(x);
// x = 10;
// console.log(x);

//function
hoist();
function hoist() {
    console.log("hoisting");
}
hoist();


//function expression
// console.log(a);
// a(); //TypeError: a is not a function
var a = function() {
    console.log("a");
};
a();

//arrow function
// b();
// var b = () => {
//     console.log("b");
// };



// console.log(b);
// let b = 20; //TDZ -> variable declaration to variable initialization

// a();  
// let a = function() {
//     console.log("apple");
// };

// console.log(c);
// let c = 20; //TDZ