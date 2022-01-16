'use strict';
// node Array.js -> To Run .

/*  CHALLENGE 1
    given an array, return an array for the elements that doesn't 
    have greater elements in the right side of them..
    EX: [2,8,5,4] => [8,5,4] */

let arrayOne = [2,8,5,4]; // => [8,5,4]
let arrayTwo = [2, 8, 5, 4, 7, 3, 6]; // => [6,7,8]
const rightElement = (arr) => {
    let newArr = [];
        newArr.push(arr[arr.length - 1]);
        let max = arr[arr.length - 1];
        for (let i = arr.length - 2; i >= 0; i--) {
            if (arr[i] > max) {
                newArr.push(arr[i]);
                max = arr[i];
            }
        }
    return newArr;
};
console.log(rightElement(arrayTwo));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




















