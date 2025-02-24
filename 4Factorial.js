// Write a function to calculate the factorial of a given number.
factorial = (num) => {
    if(num === 0 || num === 1 ) return 1
    return num * factorial(num - 1);
}

// Order of Time complexity = O(n)
// Order of Space complexity = 

 console.log(factorial(5))