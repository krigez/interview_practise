// Write a function to merge two sorted arrays into a single sorted array.


mergearr = (arr1, arr2) => {
    arr1 = arr1.concat(arr2)
    arr1.sort((a, b) => a - b);
    return arr1
}



let inp1 = [1, 3, 5]
let inp2 = [2, 4, 6]

console.log(mergearr(inp1, inp2))
// Output: [1, 2, 3, 4, 5, 6]