const nums = [1,2,3,4,5,6,7,8];
// const part = nums.slice(2,5);
const removed = nums.splice(2,5,77,88,99);//we can add value from where we removed those values
// console.log(removed);
// console.log(nums);
const together = nums.join(",") //for join array will be convert in string 
console.log(together);