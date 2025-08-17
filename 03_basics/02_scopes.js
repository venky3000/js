// var c = 300
let a = 300 // global scope
if (true) {
  let a = 10 // block scope
  const b = 20
//   c = 30 // var gets called everywhere i.e. it has unknown scope
    // console.log("Inner:",a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
    const username = "venky"

    function two() {
        const website = "youtube"
        // console.log(username);
    }
    // console.log(website);
    two() 
}

one()

if (true) {
    const username = "venky"
    if (username == "venky") {
        const website = " youtube"
        // console.log(username + website);
        
    }
    // console.log(website);
    
}
// console.log(username);


// ++++++++++++++++++++++interesting++++++++++++++++++++++++++

console.log(addone(5))
function addone(num) {
    return num + 1;
}



// addTwo(5) // throws error cause the function is held in a variable
const addTwo = function(num) {
    return num + 2
}

console.log(addTwo(5)) // shows output cause the call is after variable declaration