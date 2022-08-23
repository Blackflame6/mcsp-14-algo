// Write the splitter function that:

// Takes in an array and a num
// returns an array of subarray of length num

// notes:

// Subarrays cannot have a length of > num
// sub array CAN have a length that is <= num
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const num = 3;
function splitter(arr, num) {
  // your code here
  let innerArr = [];
  

  for (let i = 0; i < arr.length - 1; i++) {
    let last = innerArr[innerArr.length - 1];
    let nums = arr[i];

    
    if (!last || last.length === num) {
      innerArr.push([nums]);
      
    } else {
      last.push(nums);
    }
  }
  return innerArr
}

console.log(splitter(arr, num));
// should return [[1,2,3], [4,5,6], [7,8,9], [10]]
