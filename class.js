//class(blueprint of object -> used for reduce code repeatation)
//polymorphism(method overriding)

// class Person {
    // name;
    // email;
//     #password;

//     constructor(name, email, password) {
//         this.name = name;
//         this.email = email;
//         this.#password = password;
//     }

//     getName() {
//         return this.name;
//     }

//     getEmail() {
//         return this.email;
//     }

//     getPassword() {
//         return this.#password;
//     }
//     introduce() {
//         console.log("This is parent class");
//     }

// }
// const suki = new Person("Surakshya", "surakshya@gmail.com", "suki@123");
// console.log(suki);
// console.log(suki.getPassword());
// suki.introduce();

// const kranti = new Person("kranti", "Kranti@gmail.com", "kranti@123");
// console.log(kranti);
// console.log(kranti.password);




// without using inheritance
// class Student extends Person{
//     name;
//     email;
//     #password;
//     faculty;
//     roll_no;
//     year;

//     constructor(name, email, password, faculty, roll_no, year) {
//         this.name = name;
//         this.email = email;
//         this.#password = password;
//         this.faculty = faculty;
//         this.roll_no = roll_no;
//         this.year = year;
//     }
//     getName() {
//         return this.name;
//     }

//     getEmail() {
//         return this.email;
//     }

//     getPassword() {
//         return this.#password;
//     }

//     getFaculty() {
//         return this.faculty;
//     }

//     getRollno() {
//         return this.roll_no;
//     }

//     getYear() {
//         return this.year;
//     }
// }


// using inheritance
// class Student extends Person{
    // faculty;
    // roll_no;
    // year;

    // constructor(name, email, password, faculty, roll_no, year) {
    //     super(name, email, password);
    //     this.faculty = faculty;
    //     this.roll_no = roll_no;
    //     this.year = year;
    // }

    // getFaculty() {
    //     return this.faculty;
    // }

    // getRollno() {
    //     return this.roll_no;
    // }

    // getYear() {
    //     return this.year;
    // }

    //polymorphism(used same name method in parent and child both class)
//     introduce() {
//         console.log("This is child class");
//     }
// }

// const student = new Student("Surakshya Khatri", "surakshyakhatri@gmail.com", "surakshya@123", "BCA", "12", "2079");
// console.log(student);
// console.log(student.getName());
// console.log(student.getEmail());
// console.log(student.getPassword());
// console.log(student.getFaculty());
// console.log(student.getRollno());
// console.log(student.getYear());
// student.introduce();


//abstraction
// class CoffeeMaker {
//     makeCoffee() {
//         this.#start();
//         this.#heating();
//         this.#closed();
//     }

//     #start() {
//         console.log("Starting");
//     }

//     #heating() {
//         console.log("Heating");
//     }

//     #closed() {
//         console.log("Closed");
//     }

// }
// const cm = new CoffeeMaker();
// cm.makeCoffee();

//static
//getter setter
//this



//Account(initial_amt, acc_name) -> deposit(), withdraw(), blc_inq(), get_details()
class Account {
    // acc_name;
    #balance;

    constructor(acc_name, initial_amt) {
        this.acc_name = acc_name;
        this.#balance = Number(initial_amt);
    }

    getName() {
        return this.acc_name;
    }
    
    blc_inq() {
        return this.#balance;
    }

    getDetails() {
        console.log(`Now Account name: ${this.acc_name} and Amount: ${this.#balance}`);
    }


    deposit(amount) {
        if(amount > 0) {
            this.#balance += amount;
            console.log(`Deposit: ${amount}`);
        } else {
            console.log("Please enter correct amount");
        }
    }

    withdraw(amount) {
        if(amount > this.#balance) {
            console.log("You have no money");
        } else if(amount <= 0) {
            console.log("Please enter correct amount");
        } else {
            this.#balance -= amount; 
            console.log(`Withdraw ${amount}`);
        }       
    }
  
}
  const acc_details = new Account("Surakshya Khatri", 120000);
  acc_details.getDetails();
  console.log(acc_details.getName());
  console.log(acc_details.blc_inq());
  acc_details.deposit(50000);
  acc_details.withdraw(20000);
  console.log(acc_details.blc_inq());
  acc_details.getDetails();
