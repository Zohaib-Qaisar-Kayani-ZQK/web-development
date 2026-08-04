const arr = [2,1,2,4,2,5,2,3,3,3,3,3,3];
const target = 2;

var countOccurences = function (arr, target) {
    let count = 0; 
    // count variable local to the function, because global variables are dangerous. Because A function should rely only on its own inputs and local variables whenever possible.

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            count ++;
        }
    }
    return count;
} 

console.log(countOccurences(arr,target));

console.log(countOccurences(arr,1));
console.log(countOccurences(arr,3));