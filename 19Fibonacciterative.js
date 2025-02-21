// Write a function to generate the nth Fibonacci number iteratively.

// Input: 6
// Output: 8
// Note - Series starting with 1 not 0!

function fibonacciS(n) {
    if (n <= 1) return n; // Base cases
  
    let prev2 = 0;
    let prev1 = 1;
  
    // Iteratively calculate Fibonacci numbers
    for (let i = 2; i <= n; i++) {
      let current = prev1 + prev2;
      prev2 = prev1; // Shift `prev2` to `prev1`
      prev1 = current; // Update `prev1` to `current`
    }
  
    return prev1;
  }

console.log(fibonacciS(6))