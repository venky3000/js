
function sayMyName() {
    console.log("V");
    console.log("e");
    console.log("n");
    console.log("k");
    console.log("y");
}

// sayMyName // just a reference
// sayMyName() // actual call for function

// function addTwoNum(num1, num2)// parameters
// {
//    console.log(num1 + num2); 
// }

function addTwoNum(num1, num2)// parameters
{
    // let result = num1 + num2
    // console.log("Venky");
    // return result
    return num1 + num2
}
const result = addTwoNum(3, 5) // arguments

// console.log("Result:", result);

function loginUserMessage(username = "ben") // default value 
{
    // if(username === undefined) {
    //     console.log("Please enter a username");
    //     return
    // }
    if(!username) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

loginUserMessage("Venky") // value is returned but never printed as it is not stored in a variable or is printed on console
// console.log(loginUserMessage("Venky"));
// console.log(loginUserMessage()); // returns undefined
// console.log(loginUserMessage()); // default value gets printed 
// console.log(loginUserMessage("Venky")); // default value gets overidden 

function calculateCartPrice(val1, val2, ...num1) // rest operator used before num1 
{
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "Venky",
    price: 223
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    
}

// handleObject(user)
// handleObject({
//     username: "sam",
//     price: 344
// })
const myNewArray = [299, 488, 322, 433]

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 500, 504]));
