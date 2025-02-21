// Given an array of non-negative integers representing the height of bars in a histogram, 
// find the largest rectangle that can be formed from the histogram.

// Input: [2, 1, 5, 6, 2, 3]
// Expected Output: 10 (The largest rectangle is formed by heights 5 and 6)
// Note - The area of this rectangle is calculated as the width (number of bars) times the minimum height 
// of the bars within the rectangle: 2 * min(5, 6) = 2 * 5 = 10.

largestRectangleArea = (heights) => {
    let maxArea = 0;
    for (let i = 0; i < heights.length; i++) {
        let minHeight = Infinity;
        for (let j = i; j < heights.length; j++) {
            minHeight = Math.min(minHeight, heights[j]);
            maxArea = Math.max(maxArea, minHeight * (j - i + 1));
        }
    }
    return maxArea;
}

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3])); // 10