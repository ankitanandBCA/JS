/* DATATYPE CONVERSION */
/*--------------------*/

let score=33;
console.log(typeof score);  // number

let score1="33"
console.log(typeof (score1));  // string

let score2="55"
let valueInNumber=Number(score2);
console.log(typeof valueInNumber);  // number

let score3="66abc"
let value=Number(score3)
console.log(typeof value);  // number
console.log(value);  //NaN

/*
note =>

    "33" => 33
    "33abc" =>NaN
    true => 1
    1 => true
    false => 0
    0 => false
    null => 0
    " " => false
    "ankit" => true

    */

    let a=1;
    let v=Boolean(a)
    console.log(typeof v); // boolean
    console.log(v);  // true
    
    



