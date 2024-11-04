// primitive

// 7 type : string , number , null , undefind, boolean , BigInt, symbol
 const score=100
 const scorevalue=100.3
 const isLogginedin=false
 const outsideTemp=null
 let userEmail;

 const id=Symbol('123')

 const anotherId=Symbol('123')

 console.log(id===anotherId)

 // refrence (non primitive)

 // array , object , functions

 const heros=["shaktiman","spiderman","badman"];


 let myobj ={
    name:"ankit",
    age:22
 }

 const myfunction=function()
 {
    console.log("hello world!");
 }

 console.log(typeof anotherId);