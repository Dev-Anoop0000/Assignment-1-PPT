console.log(`

💡Question-7. Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the nonzero elements.

Note that you must do this in-place without making a copy of the array.

**Example 1:**
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

`);

// Programmmm



function moveZero(num) {
    let noneZeroEl = 0;

    for (let i = 0; i < num.length; i++) {
        if (num[i] !== 0) {

            num[noneZeroEl] = num[i];
            noneZeroEl++;
        }
    }


    while (noneZeroEl < num.length) {
        num[noneZeroEl] = 0;
        noneZeroEl++;
    }
}

const num = [0, 1, 0, 3, 12];

moveZero(num);

console.log("After moving zero in last :", num);