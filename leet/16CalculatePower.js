// Write a function to calculate the power of a number.

// Input: 2, 3
// Output: 8

calculatepowwer = (num, power) => {
    let result = 1;
    for (let i = 0; i < power; i++) {
        result  = num * result;
    }
    return result;
}

console.log(calculatepowwer(2, 3));
console.log(calculatepowwer(3,2));
console.log(calculatepowwer(2, 4));
