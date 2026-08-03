"use strict";

// // Took the Content i.e. required number
// let counter_num = Number(document.getElementById("counter-number").textContent);

// console.log(typeof(counter_num));
// console.log(counter_num);

// // Decrease Counter
// document.getElementById("btn-decrease").addEventListener('click', ()=> {
//     counter_num--;
//     document.getElementById("counter-number").innerHTML = counter_num;
    
// })

// // Increase Counter
// document.getElementById("btn-increase").addEventListener('click', () => {
//     counter_num++;
//     document.getElementById("counter-number").innerHTML = counter_num;
// })


// Took Whole Element Here
let counter_ele = document.getElementById("counter-number");

console.log(typeof(counter_ele));
console.log(counter_ele);

let counter = Number(counter_ele.textContent);
console.log(counter);
console.log(typeof(counter));
// console.log(counter+1);

document.getElementById("btn-increase").addEventListener('click', () => {
    counter++;
    counter_ele.textContent = counter;
})

document.getElementById("btn-decrease").addEventListener('click', () => {
    counter--;
    counter_ele.textContent = counter;
})
