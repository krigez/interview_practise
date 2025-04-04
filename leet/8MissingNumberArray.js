// Write a function to find the missing number in an array of integers from 1 to n.

// Input: [1, 2, 3, 5]
// Output: 4

missingArray = (arr) => {
    arr.sort()
    let n = arr.length
    let arr2 = []
    for(i=1; i< arr[n-1]; i++) {
        if(!arr.includes(i)) arr2.push(i)
    }
    return arr2
}

// Order of Time complexity = 
// Order of Space complexity = 

console.log(missingArray([1,2,3,5]))