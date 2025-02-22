reverseString = (str) => {
    return str.split("").reverse().join("")
}
console.log(reverseString("Hello"))

// Order of Time complexity = O(n)
// Order of Space complexity = O(n)


// two pointers
function reverseStringLoop(str) {
  // strings are immutable
  let arr = str.split("");
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]]; // Swap
    left++;
    right--;
  }
  return arr.join("");
}

// Order of Time complexity = O(n)
// Order of Space complexity = O(1)