//arrray methods

//forEach
// const numbers = [1,2,3,4,5];
// const result = num => num * 2;

// const callback = (value, index, array) => {
//     console.log(value, index, array);
//     return value*2;
// };

// numbers.forEach(callback);
// let doubled = [];

// numbers.forEach((val, index) => {
//     console.log(index);
//     doubled.push(val * 2);
// });
// console.log(doubled);

//map
// const doubled = numbers.map((val) => {
//     return val * 2;
// });

// console.log(doubled);
// console.log(numbers);

//filter
// const even = numbers.filter((val) => {
//     if(val%2 === 0) {
//         return val; //return true;
//     }
// });

// console.log(even);
// console.log(numbers);

//using arrow 
// const even = numbers.filter((val) => val%2 === 0);
// const odd = numbers.filter((val) => val%2 !== 0);

// console.log(odd);
// console.log(even);
// console.log(numbers);

//reduce
// const total = numbers.reduce((acc, val) => {
//     return (acc += val);
// }, 0);

// console.log(total);
// console.log(numbers);

// using arrow
// const total = numbers.reduce((acc, val) => (acc += val));

// console.log(total);
// console.log(numbers);

//output: sum of total price * quantity
// const cart = {
//     user: {},
//     items: [
//         {product: {price: 1000}, quantity:12},
//         {product: {price: 100}, quantity:10},
//         {product: {price: 1500}, quantity:12},
//     ]
// };

// const total = cart.items.reduce((acc, val) => {
//     return acc += (val.product.price * val.quantity);
// }, 0);

// console.log(total);


//find
// const res = numbers.find((val) => {
//     if(val > 4) {
//         return val;
//     }
// });
// console.log(res);

//using arrow
// const res = numbers.find((val) => val > 4);
// console.log(res);

//output: using id console item
// const cart = {
//     user: {},
//     items: [
//         {product: {id: 1, price: 1000}, quantity:12},
//         {product: {id: 2, price: 100}, quantity:10},
//         {product: {id: 3,price: 1500}, quantity:12},
//     ]
// };

// const total = cart.items.find((val) => {
//    if(val.product.id === 2) {
//     return val;
//    }
// }, 0);

// console.log(total);

//findIndex: return index
// const total = cart.items.findIndex((val) => val.product.id ===2);
// console.log(total);


//every
// const result1 = numbers.every((val) => val > 0);
// console.log(result1);
// const result2 = numbers.every((val) => val > 2);
// console.log(result2);

//some
// const result3 = numbers.some((val) => val > 3);
// console.log(result3);
// const result4 = numbers.some((val) => val > 10);
// console.log(result4);

//sort
//string sort
// let fruits = ["banana", "apple", "orange", "graps"];
// fruits.sort();
// console.log(fruits);

//reverse
// const fruits = ["banana", "apple", "orange", "graps"];
// fruits.reverse();
// console.log(fruits);

//sort and reverse
// const fruits = ["banana", "apple", "orange", "graps"];
// fruits.sort().reverse();
// console.log(fruits);


//numbers sort
// const numbers = [10,5,3,20,25,24];
// const acsNum = numbers.sort((a, b) => a - b);
// console.log(acsNum);

// const numbers = [10,5,3,20,25,24];
// const acsNum = numbers.sort((a, b) => b - a);
// console.log(acsNum);