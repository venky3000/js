const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (val) {
    // body of function
    // console.log(val);
} ) // simple function

coding.forEach( (item) => {
    // console.log(item);
} ) // arrow function

function printMe(item) {
    // console.log(item);
}
coding.forEach(printMe)

coding.forEach( (item, index, arr) => {
    // console.log(item, index, arr);
} )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item) => {
    // console.log(item.languageName);
} )