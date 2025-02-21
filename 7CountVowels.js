// Write a function to count the number of vowels in a given string.

// Input: "Hello"
// Output: 2

const vowels = ["a", "e", "i", "o", "u"]
vowelscount = (str) => {
    let arr = str.split("");
    let count = 0;
    arr.forEach(element => {
        if(vowels.includes(element)) count++
    });
    return count
}

// Order of Time complexity = O(n)
// Order of Space complexity = O(n)

console.log(vowelscount("brreaam hello"))

// Regex for characters
// return count = str.match(/[aeiou]/gi).length;
