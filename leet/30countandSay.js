// The "count and say" sequence is a series of numbers where each term describes the count of 
// consecutive digits in the previous term. It starts with the seed term "1" and continues as follows:

// n=1 Seed Term: "1"
// n=2 First Term: One "1" - "11"
// n=3  Second Term: Two "1"s - "21"
// n=4 Third Term: One "2" followed by one "1" - "1211"
// n=5 Fourth Term: One "1," one "2," and two "1"s - "111221"
// n=6 Fifth Term: Three "1"s, two "2"s, and one "1" - "312211"
//n=7  ---- "13112221"
// n=8 ----1112213211
// Input: 4 , Expected Output: "1211"


countAndSay = (n) => {
    let nums = "1"
    if (n == 1) {
        return nums
    }
    for (i = 1; i < n; i++) {
        let count = 1
        let current = ""
        for (j = 1; j <= nums.length; j++) {
            if (nums[j] == nums[j - 1]) {
                count++
            } else {
                console.log(count.toString(), nums)
                current = current + count.toString() + nums[j]
                count = 1
            }
        }
        console.log(current, ' ', nums)
        current += count.toString() + nums[nums.length - 1];
        count = 1;
        nums = current;
    }
    return nums
}



console.log(countAndSay(2)); // Output: "11"
// console.log(countAndSay(3)); // Output: "21"
// console.log(countAndSay(4)); // Output: "1211"
// console.log(countAndSay(5)); // Output: "111221"


