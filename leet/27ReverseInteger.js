// Write a function that reverses the digits of an integer.

// Input: 123
// Expected Output: 321


reverseInteger = (num) => {
    const reversed = Math.abs(num).toString().split('').reverse().join('')
    return num < 0 ? -Number(reversed) : Number(reversed)
}