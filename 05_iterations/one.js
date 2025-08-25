// for

for (let i = 0; i < 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is best number");
    }
    // console.log(element);
}

// console.log(element) // gives error because element's scope is inside the loop

for (let i = 0; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);
    for (let j = 0; j <= 10; j++) {
        // console.log(`Inner loop value ${j} and inner loop ${i}`);
        // console.log(i + '*' + j + '=' + i * j);
    }
}
let myArray = ["batman", "superman", "flash"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);   
}

// break and continue

// for (let index = 1; index <= 20; index++) {
//     if(index == 5) {
//         console.log(`Detected 5`);
//         break // direct bahar aur end
//     }
//     console.log(`Value of i is ${index}`);   
// }
for (let index = 1; index <= 20; index++) {
    if(index == 5) {
        console.log(`Detected 5`);
        continue // ek baar maaf
    }
    console.log(`Value of i is ${index}`);   
}