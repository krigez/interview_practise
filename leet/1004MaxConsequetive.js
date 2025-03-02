// Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.
// Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
// Output: 6
// Explanation: [1,1,1,0,0,1,1,1,1,1,1]
// Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.

longestOnes = (nums, k) => {
    let max_window = 0
    let zeros = 0;
    let n = nums.length;
    let j = 0; 

    for (let i = 0; i < n; i++) {
        if(nums[i] == 0) {
            zeros++
        }

        while(zeros > k) {
            if(nums[j] == 0) {
                zeros--
            }
            j++
        }
        let window = i - j + 1
        max_window = Math.max(max_window, window)
    }
    return max_window
}


let nums = [1,1,1,0,0,0,1,1,1,1,0]
let k = 2
console.log(longestOnes(nums, k))