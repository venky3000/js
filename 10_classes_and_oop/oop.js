const user = {
    // object literal
    username: "venky",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function() {
        // console.log("Got user details from DB");
        // console.log(`Username:${username}`);// error
        // console.log(`Username:${this.username}`);
        // console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);


// const promiseOne = new Promise();
// const date = new Date();

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        // console.log(`Welcome: ${this.username}`);
    }

    return this
}

const userOne = new User("venky", 10, true)
const userTwo = new User("Javascript", 11, false)

console.log(userOne.constructor);
// console.log(userTwo);

// when new keyword is used, an empty object is created also called as an instance; it then calls a constructor function; wraps all the arguments and parameters in it; in this keyword, all the arguments and parameters get injected; then it gives everything in a function