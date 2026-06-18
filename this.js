// let user = {
//     name: "surakshya",
//     email: "surakshya12@gmail.com",
//     getName: function() {
//         console.log(this.name);
//     }
// };
// user.getName();

// let user = {
//     name: "surakshya",
//     email: "surakshya12@gmail.com",
//     getName: function() {
//         const a = () => {
//             console.log(this);
//         };  
//         a();      
//     },
// };
// user.getName();



// let user = {
//     name: "surakshya",
//     email: "surakshya12@gmail.com",
//     getName: function() {
//         console.log(this);
//     }
// };
// const func = user.getName;
// func();


function introduce(age, email) {
    console.log("This is ", this.name, age, email);
}

let user = {
    name: "surakshya",
    email: "surakshya@gmail.com",
};

introduce.call(user, 10, "surbi@gmail.com");
introduce.apply(user, [12, "suki@gmail.com"]);
const fn = introduce.bind(user);
fn(20, "kranti@gmail.com");