const user = {
    name: "Surakshya",
    email: "surakshyakhatri@gmail.com",
    address: {
            city: "Banke",
            country: "nepal",
    },
};

console.log(user);

//dot notation
// console.log(user.name);
// const user_name = user.name;
// console.log(user_name);

//bracket notation
// console.log(user["email"]);

// let key = "name";
// console.log(user.key); //undefined
// console.log(user[key]); 

// key = "email";
// console.log(user[key]);


// adding new properties
// const new_key = "age";
// const new_value = 22;
// user[new_key] = new_value;


//modify properties
// user.age = 25;

// console.log(user);




//destructuring
// let name = user.name;
// let email = user.email;
// console.log(name, email);



// let user2= {
//     name: "surakshya",
//     email: "surakshya@gmail.com",
//     id: "1",
//     age: 22,
// };


// let {name, email,age} = user;
// let {name:user2_name, email:user2_email} = user2;


// console.log(name, email);
// console.log(user2_name, user2_email);


//rest op ...
// let {age, name, email, ...rest} = user;
// console.log(rest);


//spread op ...
// let object1 = {
//     a: "appl",
//     b: "ball",
// };

// let object2 = {...object1, c: "cat"};
// object2.a = "apple"
// console.log(object1, object2);

const user1 = {
    name: "Surakshya",
    email: "surakshyakhatri@gmail.com",
    address: {
        city: "Banke",
        country: "nepal",
    },
};

const user2 = {
    name: "Surakshya",
    email: "surakshyakhatri@gmail.com",
};

//optional chaining [?.]
console.log(user1.address.city);
console.log(user2.address?.city);

//null safety [??]
console.log(user1.address.city);
console.log(user2.address?.city ?? "City not found");
