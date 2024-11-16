const score=400
console.log(score);
const balance=new Number(100)
console.log(balance);

//console.log(balance.toString());

//console.log(balance.toString().length());

console.log(balance.toFixed(2));  // 100.00

const an=23.8989
console.log(an.toPrecision(4));  //  23.90

const hun=100000
console.log(hun.toLocaleString('en-IN'));   // 1,00,000

console.log("****************************************\n");

console.log(Math.abs(-4));  // 4
console.log(Math.round(4.3));  //4
console.log(Math.round(4.6));  //5
console.log(Math.ceil(4.2));    //5
console.log(Math.floor(4.8));  //4
console.log(Math.min(4,6,8,9));   //4
console.log(Math.max(4,6,8,0));   //8
console.log(Math.random());       // 0--9

console.log("****************************************\n");


console.log(Math.random()*10);
//  1.0278681828830294

console.log(Math.floor(Math.random()*10));
//  5

const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min);
// 11  12  11  14  15


console.log("****************************************\n");
console.log("\t\tOTP GENRATED PROJECT\n");
const otpmin=1000
const otpmax=9999
console.log(Math.floor(Math.random()*(otpmax-otpmin+6))+otpmin);
 // 7872   2320   1873  9195  2948




