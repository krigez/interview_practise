trap = (height) => {
    let n = height.length
    let left = 0;
    let right = n - 1;
    let leftMax = 0;
    let rightMax = 0;
    let water = 0

    while (left <= right) {
        console.log(leftMax, rightMax)
        if (leftMax < rightMax) {
            if (leftMax < height[left]) {
                leftMax = height[left]
            } else {
                water = water + leftMax - height[left]
            }
            left++
        } else {
            console.log(leftMax, rightMax, height[left], height[right])
            if (rightMax < height[right]) {
                rightMax = height[right]
            } else {
                water = water + rightMax - height[right]
            }
            right--
        }
    }
    console.log("water", water)
}

let h = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
let h1 = [4,2,0,3,2,5]
trap(h1)
