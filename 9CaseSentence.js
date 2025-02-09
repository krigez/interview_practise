// Write a function that converts the first letter of each word in a sentence to uppercase.

// Input: "this is a title"
// Output: "This Is A Title"

caseSentence = (str) => {
    let arr = str.split(" ")
    arr.forEach((element, index, arr1) => {
        arr1[index] = element[0].toUpperCase() + element.slice(1)
    });
   return arr.join(" ")
}

console.log(caseSentence("this is a title"))