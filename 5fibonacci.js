// input i as number and return ith element

// The Fibonacci sequence can be efficiently solved using Dynamic Programming (DP) by either Bottom-Up (Tabulation) or Top-Down (Memoization) approaches. Let's cover both methods.

// Bottom-Up
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

// Space Optimization
function fibonacciS(n) {
  if (n <= 1) return n; // Base cases

  let prev2 = 0,
    prev1 = 1;

  // Iteratively calculate Fibonacci numbers
  for (let i = 2; i <= n; i++) {
    let current = prev1 + prev2;
    prev2 = prev1; // Shift `prev2` to `prev1`
    prev1 = current; // Update `prev1` to `current`
  }

  return prev1;
}

// Order of Time complexity = 
// Order of Space complexity = 

// Example
console.log(fibonacciS(10)); // Output: 55

function fibo() {
  process.stdin.on("data", (data) => {
    const num = parseInt(data);

    let n1 = 0;
    let n2 = 1;
    let arr = [];

    for (let i = 0; i <= num; i = n1 + n2) {
      n1 = n2;
      n2 = i;
      arr.push(n2);
    }
    console.log(n2);
    console.log(arr);
    process.exit(); // Exit the process after receiving input
  });
  process.stdout.write("Enter any number: ");
}

// Order of Time complexity = 
// Order of Space complexity = 

fibo();

// memoization

function fibonacci(n, memo = {}) {
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
console.log(fibonacci(10)); // Output: 55
// Use Space Optimization for large n (best memory efficiency).
// Use Top-Down for simplicity when recursive solutions are preferred.
