// Write a function to check if two strings are anagrams of each other.

// An anagram is a word or phrase formed by rearranging the letters of a different word or phrase

// Input: "listen", "silent"
// Output: true

anagram = (str1, str2) => {
    str1 = str1.split("").sort().join("")
    str2 = str2.split("").sort().join("")
    if(str1 == str2) return true
} 

console.log(anagram("listen", "silent"))