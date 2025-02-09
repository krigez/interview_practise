reverseString = (str) => {
    return str.split("").reverse().join("")
}

console.log(reverseString("Hello"))

// Order of Time complexity = 
// Order of Space complexity = 


// loop reverse
function reverseStringLoop(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  }

// Order of Time complexity = 
// Order of Space complexity = 