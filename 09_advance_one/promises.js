const promiseOne = new Promise(function(resolve, reject) {
    // Do an async task, DB calls, cryptography, network
    setTimeout(function() {
        console.log('Async task is complete');
        resolve()// connects resolve with .then
    }, 1000)
})

promiseOne.then(function() {
    console.log("Promise consumed");
})

new Promise(function (resolve, reject) {
    setTimeout(function() {
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function() {
    console.log("Async task 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function() {
        //
        resolve({username: "Venky", email: "venky@exp.com"});
    }, 1000)
})

promiseThree.then(function (user) {
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        // let error = true;// prints else message
        let error = false;// prints .then message i.e. username i.e. venky
        if(!error) {
            resolve({username: "venky", password: "123"});
        }
        else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

// const username = promiseFour.then((user) => {
//     console.log(user);
//     return user.username;
// }) // wrong way

promiseFour.then((user) => {
    console.log(user);
    return user.username;
}).then((username) => {
    console.log(username);
}).catch(function(error) {
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))

// console.log(username);

const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true;// prints else message
        // let error = false;// prints .then message i.e. username i.e. venky
        if(!error) {
            resolve({username: "javascript", password: "123"});
        }
        else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
})

async function consumePromiseFive () {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers() {
//     try {
//         const response = fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response);
        
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("E:", error);
//     }
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))