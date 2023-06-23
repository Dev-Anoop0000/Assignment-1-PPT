console.log(`
💡 Question-6. Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

**Example 1:**
Input: nums = [1,2,3,1]

Output: true

`)
    //Program



function check() {
    for (let i of array) {
        count = 0;
        for (let j of array) {
            if (i == j) {

                count++

            }
        }
    }
    if (count > 1) {
        return true;

    }
    if (count = 1) {
        return false;
    }
}
let array = [1, 2, 3, 1];
let count;
let result = check(array);
console.log(result);