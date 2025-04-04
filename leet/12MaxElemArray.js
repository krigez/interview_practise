// Write a function to find the maximum element in an array.

maxelemarray =(arr) => {
    let maxeee = 0
    arr.forEach(element => {
        maxeee = Math.max(element, maxeee)
    });
    return maxeee
}

let input = [3, 1, 4, 1, 5, 9, 2, 6]
console.log(maxelemarray(input))
// Output: 9