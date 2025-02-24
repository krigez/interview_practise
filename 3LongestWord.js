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

// Order of Time complexity = O(n)
// Order of Space complexity = O(n)

console.log(longestWord("The quick brownss fox jumps over the lazy dog"))

usingForLoop = (str) => {
    let arr = str.split(" ")
    let max = 0
    for(i=0; i < arr.length ;i++) {
        if(max < arr[i].length) max = arr[i].length
    }
    return max
}

// Order of Time complexity = O(n)
// Order of Space complexity = O(n)

console.log(usingForLoop("The quick brownss fox jumps over the lazy dog"))