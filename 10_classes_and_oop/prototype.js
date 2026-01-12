// let myName = "venky     "

// console.log(myName.length);
// console.log(myName.trueLength);

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function() {
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.venky = function() {
    console.log(`venky is present in all objects`);
}

Array.prototype.heyVenky = function() {
    console.log(`Venky says hello`);
}

// heroPower.venky()
// myHeros.venky()
// myHeros.heyVenky()
// heroPower.heyVenky()

// inheritance

const User = {
    name: "chai",
    email: "asfasdf@gmail.com"
}

const teacher = {
    makeVideo: true
}

const teachingSupport = {
    isAvailable: false
}

const taSupport = {
    makeAssignment: `JS Assignment`,
    fullTime: true,
    __proto__: teachingSupport
}

teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(teachingSupport, teacher)

let anotherUsername = "ChaiAurCode       "

String.prototype.trueLength = function() {
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
    
}

anotherUsername.trueLength()
"venky".trueLength()
"icetea".trueLength()