//without using asycn
// console.log("Start");
// console.log("Processing");
// console.log("End");


//using async
// console.log("Start");
// setTimeout((num, name) => {
//     console.log("Processing", num, name);
// },2000, 22, "Surakshya");
// console.log("End");

// let i = 0;
// setInterval(() => {
//     console.log(i);
//     if(i === 10) {
//         clearInterval(id);
//     }
//     i++;
// }, 1000);
// console.log("end");

//todo: countdown timer
//hr, min, sec in decrement 
//1:12:9 -> used setInterval
let hrs = 1;
let min = 12;
let sec = 9;

console.log("!!! Timer Started !!!");

const timer = setInterval(() => {

    //set output format: if hrs, min, sec < 10 vayaxi agadi 0 thapne
    // let displayHr = hrs < 10 ? "0" + hrs : hrs;
    // let displayMin = min < 10 ? "0" + min : min;
    // let displaySec = sec < 10 ? "0" + sec : sec;

    // console.log(`${displayHr} : ${displayMin} : ${displaySec}`);

    console.log(`${hrs} : ${min} : ${sec}`);

    if(hrs === 0 && min === 0 && sec ===0) {
        clearInterval(timer);
        console.log("!!! Timer Finish !!!");
        return;
    }

    if(sec === 0) {
        if(min === 0) {
            if(hrs > 0) {
                hrs--;
                min = 59;
                sec = 59;
            } 
        } else {
                min--;
                sec = 59;
            }
    } else {
        sec--;
    }
}, 1000);