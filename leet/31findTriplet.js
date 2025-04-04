// Write a function named isTripletExists that gets an array of integers arr and an integer k and returns true if there is a triplet of numbers (3 numbers) which sum to k else return false.

// Example,

// isTripletExists([2, 7, 4, 3], 9)  ->  true (The triplet {2, 4, 3})

// Brute force
isTripletExistsB = (arr, r) => {
  arr.sort((a,b) => a -b)
  for(let i =0; i< arr.length-2; i++) {
     for(let j = i+1; j< arr.length-1; j++) {
       for(let k = j+1; k < arr.length; k++) {
         sum = arr[i] + arr[j] +  arr[k]
         if(sum == r) return arr[i] + arr[j] +  arr[k]
       }
     }
  }
}

console.log(isTripletExistsB([2, 7, 4, 3, 99, 11, 2], 14)); // true




// Two Pointer Technique
// The two-pointer technique is a useful tool for solving problems that involve searching for a pair in a sorted array. 
// The technique uses two pointers to traverse the array and find the desired pair of elements.

function isTripletExists(arr, k) {
  arr.sort((a, b) => a - b);  // Step 1: Sort the array (O(n log n))
  let n = arr.length;
  
  // Step 2: Iterate through the array, selecting each element as the first element of the triplet
  for (let i = 0; i < n - 2; i++) {
    let left = i + 1;
    let right = n - 1;

    // Step 3: Use two pointers to find a triplet with the current first element
    // left is never > right as it is sorted array
    while (left < right) {
      let sum = arr[i] + arr[left] + arr[right];
      if (sum === k) {
         console.log('found', arr[i], arr[left], arr[right]);
        return true;  // Triplet found
      } else if (sum < k) {
        left++;  // Move left pointer to the right to increase the sum
      } else {
        right--;  // Move right pointer to the left to decrease the sum
      }
    }
  }

  return false;
}

//console.log(isTripletExists([2, 7, 4, 3, 99, 11, 2], 14)); // true

// Sorting the Array: O(n log n).
// Loop with Two Pointers: O(n^2) because the two-pointer search for each element takes linear time.
// Overall Complexity: O(n^2) (better than the brute-force O(n^3)).