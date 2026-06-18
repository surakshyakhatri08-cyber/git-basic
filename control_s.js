// // control statement
// // if-else

// let a = 18;
// if(a >= 18) {
//     console.log("can vote");
// } else {
//     console.log("cannot vote");
// }



// //ternary operator

// let age = 6;
// // let res = age >= 18 ? "can vote" : "cannot vote";

// let res = age >= 60 ? "major" : age >= 18 ? "adult" : "minor";
// console.log(res);



// //typeof operator
// //for number

// let b = 10;
// console.log(typeof b == "number");

// //for string
// b = "";
// console.log(typeof b);





//Loops
//do { }while

// console.log("do while");
// let i = 0;
// do {
//     console.log(i);
//     i++;  //i = i + 1;
// } while(i <= 10);

// //while
// console.log("while");
// let j = 1;
// while(j <= 10) {
//     console.log(j);
//     j++;
// }


// //for
// console.log("for loop");
// for(let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// //for in

// // for of



// //jump/branching statement

// //break
// for(let i = 1; i <= 10; i++) {
//     if(i === 6) {
//         break;
//     }
//  console.log(i);   
// }


// //continue
// for(let i = 1; i <= 10; i++) {
//     if(i === 6) {
//         continue;
//     }
//  console.log(i);   
// }

//return

// for(let i = 1; i <= 10; i++) {
//     if(i === 6) {
//         return;
//     }
//  console.log(i);   
// }

//print odd num using jump statement
for(let i = 1; i <= 10; i++) {
    if(i%2 == 0) {
        continue;
    }
    console.log(i);
}
