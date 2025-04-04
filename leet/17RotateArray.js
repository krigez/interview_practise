// Write a function to rotate elements in an array to the right by a given number of steps.

// two pointer

rotate = (arr, k) => {
    let left = 0
    let right = arr.length - k
    while (left < k) {
        [arr[left], arr[right]] = [arr[right], arr[left]]
        left++
        right++
    }
    return arr
}


let inp = [1, 2, 3, 4, 5]
k = 2
console.log(rotate(inp, k))


// Output: [4, 5, 1, 2, 3]