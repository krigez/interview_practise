// Write a function named findIndex that gets a string s and character c and 
// returns the index of the first occurrence of c in s, if it does not exist, return -1.

// Example:
// test, s -> 2 Because character s appears first time at index 2

function findIndex(s, c) {
  let chars = s.split("")
  let result = chars.forEach(element => {
    if(element == c) {
      return element
    }
  });
  console.log(result)
}

console.log(findIndex("test", "s"))