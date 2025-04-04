// Write a function to check if a given number is prime.

isprimenums = (inp) => {

    let prime = false
    if(inp < 1 ) prime = false

    for(i = 2; i< inp ; i++) {
        if(inp%i === 0) {
            prime = false
            break
        } else prime = true 
    }
    return prime    
}
console.log(isprimenums(7))
console.log(isprimenums(24))
// Input: 7
// Output: true