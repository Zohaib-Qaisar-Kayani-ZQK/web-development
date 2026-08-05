const arr = [1, 2, 9, 6, 4, 7, 9, 11, 21, 15, 13, 1, 9, 19, 16, 26, 9];
const target = 9;

const countOccurrences = (arr, target) => {
    let count =0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
        count++;
    }
  }
  return count;
};


console.log(countOccurrences(arr,target));