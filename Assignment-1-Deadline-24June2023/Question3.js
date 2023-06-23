console.log(`

💡 **Question-3.** Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

**Example 1:**
Input: nums = [1,3,5,6], target = 5

Output: 2

`);

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let target = 4;
let length = Math.ceil(num.length / 2)

function search(num, target) {
    if (target > num[length]) {
        for (let i = length; i < num.length + 1; i++) {
            if (target == num[i]) {
                console.log("Element found and index number of Element : ", i);
                break;
            }

        }

    } else if (target == num[length]) {
        console.log("I found target : ", num.length / 2);
    } else if (target < num[length]) {
        for (let i = 0; i < length; i++) {
            if (target == num[i]) {
                console.log("Element found and index number of Element : ", i);
                break;
            }

        }
    } else {
        console.log("Element not found");
    }
}
search(num, target);