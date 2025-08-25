let index = 0
// while (index <= 10) {
//     console.log(`Value of index is ${index}`);
//     index = index + 2
// }

let myArray = ["flash", "batman", "superman"]

let arr = 0;
while (arr < myArray.length) {
    console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1;
}

let score = 1// if score is set to 11, the loop prints the 11 value because it is a do while loop which runs at least once before checking condition

do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);