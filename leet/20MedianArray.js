// Write a function to find the median of two sorted arrays.

medianArray = (arr1, arr2) => {
    arr1 = arr1.concat(arr2)
    arr1.sort((a,b) => a - b)

    let median = 0
    let n = arr1.length
    if(n%2 == 0) {
        median = arr1[n/2] + arr1[(n/2)+1]
    } else {
        median = arr1[Math.floor(n/2)]
    }
    return median
}


let arr1 = [1, 3]
let arr2 = [2]

// Output: 2.0

console.log(medianArray(arr1, arr2))