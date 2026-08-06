const arr = [2,3,5,7,9,11,13,19]
const target = 9

const twoSum = (arr,target) => {
    for (let i = 0; i<arr.length; i++) {
        if(arr[i] === target) {
            return [i];
        }
    }
    return -1;
}

console.log(twoSum(arr,target));