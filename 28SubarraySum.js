// Given an array of integers, find the total number of continuous subarrays whose sum equals a specific target, K.

// Input: [1, 1, 1], 2
// Expected Output: 2 (The subarrays are [1, 1], [1, 1])


// Brute Force Approach - O(n^2)
SubarraySum = (nums, k) => {
    let count = 0;
    nums.map((item, i) => {
        let sum = 0;
        for (let j = i; j < nums.length; j++) {
            sum += nums[j];
            if (sum === k) {
                count++;
            }
        }
    });
    return count;
}

// Optimized Approach - O(n) Hash Map
// The optimized approach uses a hash map to store the prefix sum frequencies.
// The running sum is calculated at each index and checked if (currentSum - k) exists in the map.
// If it exists, the frequency of (currentSum - k) is added to the count.
// The frequency of the current sum is updated in the map.
// The count of subarrays with sum k is returned.
function subarraySum(nums, k) {
    let prefixSumCount = new Map();  // To store prefix sums and their frequencies
    prefixSumCount.set(0, 1);  // Initialize with prefix sum 0 occurring once
    let currentSum = 0;
    let count = 0;
  
    for (let i = 0; i < nums.length; i++) {
      currentSum += nums[i];  // Calculate the running sum
  
      // Check if (currentSum - k) exists in the map
      if (prefixSumCount.has(currentSum - k)) {
        count += prefixSumCount.get(currentSum - k);  // Add the frequency of (currentSum - k)
      }
  
      // Update the frequency of the current sum in the map
      prefixSumCount.set(currentSum, (prefixSumCount.get(currentSum) || 0) + 1);
    }
  
    return count;
  }
  


console.log(SubarraySum([1, 1, 1, 1], 2)); // 2