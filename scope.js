//scope
//global scope
// let global_let = "global_let";
// console.log(global_let);
// const global_const = "global_const";
// console.log(global_const);
// var global_var = "global_var";
// console.log(global_var);



//block scope
// if(true) {
// let block_let = "block_let";
// console.log(block_let);
// const block_const = "block_const";
// console.log(block_const);
// var block_var = "block_var";
// console.log(block_var);
// console.log(global_let);
// }
//  console.log(block_let);
//  console.log(block_const);
//  console.log(block_var);

//function scope
// const scope = () => {
//     console.log(global_let);
// }
// scope();

//lexical scope
// const outer = () => {
//     let outer_let = "outer let";
//     console.log(outer_let);
// console.log(value); // not access child function
// console.log(num); // not access inner function
//     const inner = () => {
//         let num = 22;
//         console.log(num);
//         console.log(outer_let);
//         console.log(value); // not access child function

//         const child = () => {
//             let value = "surakshya";
//             console.log(value);
//             console.log(num);
//             console.log(outer_let);
//         };
//         child();
//     };
//     inner();
// };
// outer();

// let x = 50;
// if(true) {
//     let x =10;
//     if(true) {
//         console.log(x);
//         x = 30;
//     }
//     console.log(x);
// }
// console.log(x);

function scope() {
    if (true) {
        let x = 20;
        if (true) {
            console.log(x);
            x = 40;
        }
        console.log(x);
    }
}
scope();
