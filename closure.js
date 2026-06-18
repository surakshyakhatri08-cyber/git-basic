// execution context





//closure (private variable used => closure)
// const counter = () => {
//     let count = "parent scope";
//     return () => {
//         console.log(count);
//     };
// };
// const child = counter();
// child();


// const Counter = () => {
//     let count = 0;
//     return () => {
//         console.log(count);
//         count++;
//     };
// };
// const counter1 = Counter();
// const counter2 = Counter();
// counter1();
// counter1();
// counter1();
// counter2();
// counter2();



const Counter = () => {
    let count = 0;

    const increment = () => {
        count++;
        console.log(count);
    };

    const show = () => {
        console.log(count);
    }

    const decrement = () => {
        count--;
        console.log(count);
    };
    return {increment, show, decrement};
};

const counter1 = Counter();
counter1.increment();
counter1.increment();
counter1.increment();
const counter2 = Counter();
counter2.show();
counter2.show();
const counter3 = Counter();
counter3.decrement();
counter3.decrement();
counter3.decrement();