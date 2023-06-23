console.log(`
💡 **Q1.** Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

**Example:**
Input: nums = [2,7,11,15], target = 9
Output0 [0,1]

**Explanation:** Because nums[0] + nums[1] == 9, we return [0, 1]

`)


function twoSum(nums, target) {
    const numMap = new Map(); // Map to store numbers and their indices

    for (let i = 0; i < nums.length; i++) {
        const targetValue = target - nums[i];
        if (numMap.has(targetValue)) {
            return [numMap.get(targetValue), i];
        }
        numMap.set(nums[i], i);
    }

    return [];
}

// Example usage:
const nums = [2, 7, 11, 15, ];
const target = 9;
const result = twoSum(nums, target);
console.log(result); // Output: [0, 1]