// Write a function isPalindrome that gets a string s and returns true if s is a palindrome, otherwise false.
// A palindrome is a string that reads the same backward or forward.

function isPalindrome(str) {
    const myinput = str.toString().trim();
    const final = myinput.split("").reverse().join("")
    return final == myinput
}

console.log(isPalindrome("121"))
console.log(isPalindrome("111"))
console.log(isPalindrome("1234321"))
console.log(isPalindrome("bob"))
console.log(isPalindrome("step on no pets"))
console.log(isPalindrome("step on no petss"))

