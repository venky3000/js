const myObj = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'Ruby',
    swift: 'Swift by apple'
}

for (const key in myObj) {
    // console.log(`${key} shortcut is for ${myObj[key]}`);   
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(key);// keys
    // console.log(programming[key]);// values
}


const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")
map.set('IN', "India") // cannot be counted because maps are known for unique values


// for (const key in map) {
//     console.log(key);
// }