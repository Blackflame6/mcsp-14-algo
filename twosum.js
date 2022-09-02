

const twoSum = (arr, sum) => {

  let pastNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    let needed = sum - arr[i];
    if (!pastNumbers.includes(needed)) {
      pastNumbers.push(current);
    } else {
      return [needed, current];
    }
   
  }

  return "Not Found";
};
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sum = 9;
console.log(twoSum(arr, sum));
