const name = "Venky"
const repoCount = 3

// console.log(name + repoCount + "Value");

console.log(`Hello, my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('venky-d')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('v'));

const newString = gameName.substring(0,3)
console.log(newString)

const anotherString = gameName.slice(-8,3)
console.log(anotherString);

const newStringOne = "  venky  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://venky.com/venky%23cf"

console.log(url.replace('%23','-'));

console.log(url.includes('sdf'));

console.log(gameName.split('-'));
