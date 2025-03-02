maxOperations = (nums, k) => {
  let operations = 0;
  nums.sort((a, b) => a - b);

  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const sum = nums[left] + nums[right];

    if (sum === k) {
      operations++;
      left++;
      right--;
    } else if (sum < k) {
      left++;
    } else {
      right--;
    }
  }

  return operations;
};
let nums = [1, 2, 3, 4];
let k = 5;
console.log(maxOperations(nums, k))

let nums2 = [3, 1, 3, 4, 3];
let k2 = 6;
console.log(maxOperations(nums2, k2));


// using map to store 
const maxMapOperations = (nums, k) => {
    let operations = 0;
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = k - nums[i];
        console.log(map)
        if (map.get(complement) > 0) {
            operations++;
            map.set(complement, map.get(complement) - 1);
        } else {
            map.set(nums[i], (map.get(nums[i]) || 0) + 1);
        }
    }
    return operations;
};

console.log(maxMapOperations(nums2, k2));
