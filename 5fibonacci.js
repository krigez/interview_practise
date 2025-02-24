// input i as number and return ith element

// The Fibonacci sequence can be efficiently solved using Dynamic Programming (DP) by either Bottom-Up (Tabulation) or Top-Down (Memoization) approaches. 

// ----------------------------------------------------------------

                                // Space Optimization
function fibonacciS(n) {
  if (n <= 1) return n; // Base cases
  let prev2 = 0,
    prev1 = 1;
  for (let i = 2; i <= n; i++) {
    let current = prev1 + prev2;
    prev2 = prev1
    prev1 = current
  }
  return prev1;
}

// Order of Time complexity = 
// Order of Space complexity = 

// Example
console.log(fibonacciS(10)); // Output: 55





// ---------------------------------------------------------------

                //  Memoization
function fibonacciM(n, memo = {}) {
  if (n <= 1) return n; // Base cases

  // Check memoized result
  if (n in memo) return memo[n];

  // Calculate and store in memo
  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  return memo[n];
}

// Order of Time complexity = 
// Order of Space complexity = 

// Example
console.log(fibonacciM(10)); // Output: 55
// Use Space Optimization for large n (best memory efficiency).
// Use Top-Down for simplicity when recursive solutions are preferred.



// ------------------------------------------------------------------------

                  // Dynamic Programming (Bottom up)
  function fibonacci(n) {
  if (n <= 1) return n; // Base cases

  // Initialize DP table
  const dp = Array(n + 1).fill(0);
  dp[0] = 0;
  dp[1] = 1;

  // Fill the table iteratively
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}

// Order of Time complexity = 
// Order of Space complexity = 

// Example
console.log(fibonacci(10)); // Output: 55
