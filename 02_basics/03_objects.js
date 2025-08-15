// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Venky",
    "full name": "Venky Stark",
    [mySym]: "myKey1",
    age: 32,
    location: "Mars",
    email: "sfasd@gsadfg",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "asdf@sadfas.com"
// Object.freeze(JsUser)
// console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello Js user");
}
JsUser.greetingTwo = function() {
    console.log(`Hello Js user, ${this.name}`);
}

console.log(JsUser.greeting);// function defined
console.log(JsUser.greeting());// function created and called
console.log(JsUser.greetingTwo());// function created and called
