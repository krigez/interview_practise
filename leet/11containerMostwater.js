var maxArea = function(height) {
    let left = 0;
    let right = height.length -1;
    let area = 0

    while(left < right) {
            let width = right - left
            let minHt = Math.min(height[left] , height[right])
            area = Math.max(area, width*minHt)

            if(height[left] < height[right]) {
                left++
            } else right--
    }

    return area
};

let ht = [1,8,6,2,5,4,8,3,7]
console.log(maxArea(ht))