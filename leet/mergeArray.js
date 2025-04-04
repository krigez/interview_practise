// Write a function named merge that gets two sorted arrays of integers and returns a merged array of the two, sorted.

// Examples:

let a1 = [1, 5, 7];
let a2 = [2, 6, 9];
// out -> [1, 2, 5, 6, 7, 9]

// [-1, 5], [0, 9] -> [-1, 0, 5, 9]

function merge() {
  // Write code here
  let a3 = [];
  a3 = [...a1, ...a2];
  a3.sort();
  console.log(a3);
  return a3;
}

merge();
