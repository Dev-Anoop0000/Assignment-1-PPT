console.log(`
💡 **Question-4.** You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.

**Example 1:**
Input: digits = [1,2,3]
Output: [1,2,4]

**Explanation:** The array represents the integer 123.

Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].
`);

// Solution 

function plusOne(digits) {
    const n = digits.length;


    for (let i = n - 1; i >= 0; i--) {
        // Increment the current digit
        digits[i]++;
        // console.log(i);


        if (digits[i] === 10) {
            digits[i] = 0;
        } else {

            return digits;
        }
    }

    // If  all the digits were 9's and we need to add an extra digit of 1

    digits.unshift(1);

    return digits;
}

// Example usage:
const digits = [1, 2, 3, 4, 5, 6];
const result = plusOne(digits);
console.log(result);