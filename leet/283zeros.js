moveNonZeroes = (nums) => {
    let nonZeroIndex  = 0;
    for (let currentIndex = 0; currentIndex < nums.length; currentIndex++) {
        if (nums[currentIndex] !== 0) {
            [nums[currentIndex], nums[nonZeroIndex ]] = [nums[nonZeroIndex ], nums[currentIndex]];
            console.log(nums, nonZeroIndex)
            nonZeroIndex ++;
        }
    }
    return nums
}

let nums1 = [0,1,0,3,12]

console.log(moveNonZeroes(nums1))



