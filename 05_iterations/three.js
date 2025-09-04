// for of

// ["", "", ""] // array of strings
// [{}, {}, {}] // array of objects

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
}

const greetings = "Hello World"

for (const greet of greetings) {
    console.log(`Each char is ${greet}`); 
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")
map.set('IN', "India") // cannot be counted because maps are known for unique values


console.log(map);

for (const [key/*for all information*/, value]/*for key-value pairs*/ of map) {
    // console.log(key); // for whole information
    console.log(key, ':-', value); // for whole information
}

const myObj = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

// for (const [key, value] of myObj) {
//     console.log(key, ':-', value);
// }