// Write a function that reverses the order of words in a sentence.

reverseWordString =  (inp) => {
    return inp.split(" ").reverse().join(" ")
}


let input = "Hello World"
// Output: "World Hello"

console.log(reverseWordString(input))