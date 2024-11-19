const Array=[1,2,3,4,5]
console.log(Array[0])
/*
const arr = new Array(1, 2, 3, 4, 5);
console.log(arr.push(6)); // Adds 6 to the array and logs the new length of the array
console.log(arr.pop);
console.log(arr.unshift(6));
console.log(arr.shift);

*/
// slice splice

console.log("A",Array);
const mynum1=Array.slice(1,3);
console.log(mynum1);
/*
A [ 1, 2, 3, 4, 5 ]
[ 2, 3 ]

*/
console.log("B",Array);
const mynum2=Array.splice(1,3);
console.log(mynum2);
/*
B [ 1, 2, 3, 4, 5 ]
[ 2, 3, 4 ]
 
*/
