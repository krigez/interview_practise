// Write a function named isSplitable that gets an array of integers and returns true if it's possible to split the array into two arrays where the sum of both of them is the same, otherwise false.

// Examples,

// [5, 2, 3]  ->  [5] and [2, 3]
// [2, 3]  ->  Not splitable
// [5, 6, 5, 4]  -- [5, 5] and [6, 4]

function isSplitable(arr) {
  const totalSum = arr.reduce((sum, num) => sum + num, 0);

  // If the total sum is odd, it cannot be split into two equal parts
  if (totalSum % 2 !== 0) return false;

  const targetSum = totalSum / 2;

  // Helper function to check if a subset can sum to targetSum
  function canPartition(index, currentSum) {
    // If currentSum equals targetSum, we've found a valid partition
    if (currentSum === targetSum) return true;
    // If out of bounds or currentSum exceeds targetSum, stop further recursion
    if (index >= arr.length || currentSum > targetSum) return false;

    // Try including the current element
    if (canPartition(index + 1, currentSum + arr[index])) return true;
    // Try excluding the current element
    return canPartition(index + 1, currentSum);
  }

  return canPartition(0, 0);
}

// Examples
console.log(isSplitable([5, 2, 3])); // true
console.log(isSplitable([2, 3])); // false
console.log(isSplitable([5, 6, 5, 4]));

function isSplitable2(arr) {
  const totalSum = arr.reduce((sum, num) => sum + num, 0);

  // If the total sum is odd, it's impossible to split into two equal parts
  if (totalSum % 2 !== 0) return false;

  const targetSum = totalSum / 2;
  const n = arr.length;

  // Create a DP array where dp[j] indicates if a sum of j can be formed
  const dp = Array(targetSum + 1).fill(false);
  dp[0] = true; // Sum of 0 is always possible

  // Process each number in the array
  for (let num of arr) {
    for (let j = targetSum; j >= num; j--) {
      dp[j] = dp[j] || dp[j - num];
    }
  }

  return dp[targetSum];
}

// Examples
console.log(isSplitable2([5, 2, 3])); // true
console.log(isSplitable2([2, 3])); // false
console.log(isSplitable2([5, 6, 5, 4]));
