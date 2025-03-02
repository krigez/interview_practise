var isPowerOfThree = function(n) {
    let temp = 3;
    if (n === 1) return true;
    while (temp <= n) {
        if (temp == n) return true;
        temp = temp * 3;
    }
    return false;

};
console.log(isPowerOfThree(125))
//isPowerOfThree(27)

// O(log n)