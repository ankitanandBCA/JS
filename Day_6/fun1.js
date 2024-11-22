// Basic of function

function MyName(){
    console.log("a");
    console.log("n");
    console.log("k");
    console.log("i");
    console.log("t");
   
}

MyName()    // a n k i t

function addNum(num1,num2) {
    console.log(num1+num2);
    
}

addNum(10,5)   // 15
const result=addNum(10,5)   
console.log("result :",result);   // undefind

function addNum(num1,num2) {
    let num3=num1+num2;
    return num3;
}

const result1=addNum(25,25);
console.log(result1);  // 50


function LogginUser(username) {
    return '${username} just Logged in';
    
}

console.log(LogginUser("ankit"));
// ankit just logged in

function LogginUser(username) {
  
    if(username===undefined && !username)
    {
        console.log("plz enter the name :");
        return
    }

    return '${username} just Logged in';
    
}
console.log(LogginUser());
