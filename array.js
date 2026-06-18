//Array //[] // numbered index -> started with 0th
//new keyword
// const arr = new Array(22,23);

//array literal
const numbers = [1,2,3,4,5,6];

//reading elements
// const element = numbers[0];
// console.log(element);
// console.log(numbers[5]);
// console.log(numbers);

//adding element
//from end
//push
// const res = numbers.push(7);
// console.log(res); // return with length
// console.log(numbers);

//from start
//unshift
// const res1 = numbers.unshift(0);
// console.log(res1); //return with length
// console.log(numbers);


//remove element 
//from end
//pop
// console.log(numbers);
// const result = numbers.pop();
// console.log(result); // return with removed element
// console.log(numbers);

//from start
//shift
// console.log(numbers);
// const result1 = numbers.shift();
// console.log(result1);
// console.log(numbers);

//length
// console.log(numbers.length);

// numbers.push(7);
// numbers.push(55);
// console.log(numbers[numbers.length-1]); // for dynamic end length

//search
//arr.includes(el) -> return boolean
// console.log(numbers.includes(3));
// console.log(numbers.includes(10));

//arr.indexOf(el) -> return index
// numbers.push(3);
// console.log(numbers.indexOf(3));
// console.log(numbers.indexOf(10));
// console.log(numbers.lastIndexOf(3)); //return last indexed number
// console.log(numbers);

//join
// console.log(numbers.join(","));
// console.log(numbers.join("-"));