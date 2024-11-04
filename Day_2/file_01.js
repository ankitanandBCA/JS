/* data type */
/*-------------*/



"use strict";   // treat all js code newer virsion

//alert(3+3) // we are using nodejs not browser
/*
console.log(3+3) console.log("ankit");

this code is not readable so u are not using this technique
*/

/*
console.log(3+3);
 console.log("ankit");

 this code is readble so using this technique
 */

 let name="Ankit"
 let age=18
 let isLogginedin=true
 let city=null
 let state;
 console.table([name,age,isLogginedin,city,state]);
/*
output =>
┌─────────┬───────────┐
│ (index) │ Values    │
├─────────┼───────────┤
│ 0       │ 'Ankit'   │
│ 1       │ 18        │
│ 2       │ true      │
│ 3       │ null      │
│ 4       │ undefined │
└─────────┴───────────┘
*/

// number = 2 power 53
// bigint
//string=> " "
//boolean=true/false
//null => standlone value
//undefined 
// simbol => unique

console.log(typeof(null));  // object
console.log(typeof(undefined));  // undefined