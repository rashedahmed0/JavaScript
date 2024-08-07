let max = Math.max(23, 53, 22, 35, 35, 77, 366, 332);
console.log(max);

let number = [1, 2, 3, 4, 23, 63, 54, 6, 24, 66, 44, 73, 22];
console.log(...number);
let maxArray = Math.max(...number)
console.log(maxArray);

let nums = [1, 2, 3];
let nums2 = nums;
nums2.push(4)
let nums3 = [...nums]
nums3.push(1000);
console.log(nums);
console.log(nums2);
console.log(nums3);


// advance 
let num4 = [...nums, 500]
console.log(num4);