const array = [7, 2, 9, 5, 1, 8];
// Find 5
const target = 5;

var linearSearch = (array, target) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i;
        }
    }
    return -1;
}

const index = linearSearch(array, target);
console.log(index);


