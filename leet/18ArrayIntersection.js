// Write a function to find the intersection of two arrays.

arrayintersection = (arr1, arr2) => {
    let arr3 = []
    arr1.forEach(element => {
        if(arr2.includes(element)) {
            arr3.push(element)
        }
    })
    return arr3
}


arr1 = [1, 2, 3, 4, 5]
arr2 = [3, 4, 5, 6]
console.log(arrayintersection(arr1, arr2))


// Output: [3, 4, 5]