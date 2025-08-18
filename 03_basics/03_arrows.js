const user = {
    username: "venky",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai() {
//     let username = "venky"
//     console.log(this.username);
//     // this only works inside objects and not in functions
// }

// chai()

// const chai = function() {
//     let username = "venky"
//     console.log(this.username);
    
// }

const chai = () => {
    let username = "venky"
    console.log(this);
    // arrow function
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2 // basic explicit return arrow function
// }

// const addTwo = (num1, num2) =>  num1 + num2 // implicit return arrow function

// const addTwo = (num1, num2) =>  (num1 + num2) // implicit return arrow function

// const addTwo = (num1, num2) =>  {username: "venky"} // no return of object

const addTwo = (num1, num2) =>  ({username: "venky"}) // no return of object


console.log(addTwo(3, 4));

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach(() => ())