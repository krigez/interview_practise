// Write a function that removes duplicate elements from an array.
duplicate = (arr) => {
    let arr2 = []
    arr.forEach(element => {
        if(!arr2.includes(element)) {
            arr2.push(element)
        }
    });
    return arr2
}

console.log(duplicate([1,2,3,4,2,2,3,5,4]))