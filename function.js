//function declaration

//simple function
// function greet() { //function declaration
//     console.log("Hello Surakshya");
// }
// greet(); // function invocation/call



//function with input
// function greet(name) {
//     console.log("Hello ", name);
// }
// greet("Surakshya Khatri"); 
// greet(); //undefined in name




// default parameter
// function greet(name = "Guest", age) {
//     console.log("Hello ", name, age);
// }
// greet("Surakshya Khatri", 25); 
// greet(30, "Kranti");



// number with 2 parameter and argument
// function add(a,b) {
//     console.log(a+b);
// }
// add(10,15);
// add(); //NaN



//function with return type
// function add(a =0, b=0) {
//     console.log(a+b);
//     let sum = a + b;
//     return sum;
// }
// let result1 = add(10,15);
// console.log(result1);
// let result2 = add(20);
// console.log(result2);



//function isEven(a) return true or false
// function isEven(a) {
//     if(a%2 == 0) {
//         return true;
//     }
//     else {
//        return false;
//     }

// }
// let result = isEven(21);
// console.log(result);
// console.log(isEven(20));






//function expression
// const mul = function(a, b) {
//     return a * b;
// };
// console.log(mul(2, 20));

//using function expression isOdd return true or false
// const isOdd = function (a) {
//     if(a%2 !== 0) {
//         return true;
//     }
//     return false;
// }
// console.log(isOdd(31));
// console.log(isOdd(30));



//arrow fucntion (=>)
// const dif = (a, b) => a / b;
//     console.log(dif(20, 2));

// const double = c => c*c;
//     console.log(double(3));




// call back function
// const parent = function(callback) {
//     console.log(callback);
//     console.log("Parent");
//     callback(12);
// };

// const child = function(num) {
//     console.log("Child ", num);
// };

// parent(child);

//using arrow function
// parent ((a) => {
//     console.log("Child", a);
//     return 100;
// });



//higher order function
// const hof =() => {
//     console.log("HOF");
//     const child = () => {
//         console.log("Child");

//     }
//     return child;
// };

// const children = hof();
// children();
// console.log(children);


//arrow function
//IN multiple line
// const outer = (num1) => {
//     const inner = (num2) => {
//         return num1 + num2;
//     }
//     return inner;
// };


//In one line
// const outer = num1 => num2 => num1 + num2;

// const add5 = outer(5);
// const add10 =outer(10);

// console.log(add5(10));
// console.log(add5(15));
// console.log(add10(15));



//todo: IIFE
(function(name) {
    console.log("Hello ! " +name);
}) ("Surakshya Khatri");

(function(name) {
    let text = "Hello ! " +name;
})("Suki");

(function() {
    let x = 22;
    console.log(x);
})();
// console.log(x); //undefined

(function greet() {
    let text = "Hello from IIFE";
}) ();
greet(); //undefined