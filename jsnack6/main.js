"use strict";

const numbers = [1, 2, 10, 5, 22, 50, 99, 88];

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    
    if(i % 2 !== 0){
        sum += numbers[i];
    }
    
}

console.log(sum);
