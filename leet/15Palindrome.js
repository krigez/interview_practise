// Write a function to count the number of palindromic substrings in a string.

// Input: "abba"
// Output: 6 (a, b, b, a, bb, abba)
// Input: "level" 
// Output: 7 (l, e, v, e, l, eve, level)

palindrome = (str) => {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        count += expandAroundCenter(str, i, i);
        count += expandAroundCenter(str, i, i + 1);
    }
    return count;
}

expandAroundCenter = (str, left, right) => {
    let count = 0;
    while (left >= 0 && right < str.length && str[left] === str[right]) {
        count++;
        left--;
        right++;
    }
    return count;
}

console.log(palindrome("abba"));
console.log(palindrome("level"));
