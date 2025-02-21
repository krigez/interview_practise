// Write a function that takes a sentence (string) and finds the longest word.

// Input: "The quick brown fox jumps over the lazy dog"
// Output: "quick"

longestWord = (str) => {
    let arr = str.split(" ")
    let max = 0
    arr.find(item => {
        if(max < item.length) max = item.length
    })
    return max
}

// Order of Time complexity = 
// Order of Space complexity = 

console.log(longestWord("The quick brownss fox jumps over the lazy dog"))