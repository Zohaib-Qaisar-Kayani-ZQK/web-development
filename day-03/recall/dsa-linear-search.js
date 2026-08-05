const arr = [1, 2, 6, 4, 7, 9, 11, 21, 15, 13, 19, 16, 26];
const target = 9;

const linearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] === target) {
        return [i];
    }
  }
  return -1;
};

console.log(linearSearch(arr,target));