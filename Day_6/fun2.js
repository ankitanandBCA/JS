// cart m kise data save hota hai
 function calculate_cart_data(...num){
    return num;
 }
 console.log(calculate_cart_data(100,500,2000,600));
 //     [ 100, 500, 2000, 600 ]


 // ************************************  how to handal function in object   *********************************************
   
 const User={
    username:"ankit",
    price:999
 }

 function handalobject(anyobject){
    console.log(`username is ${anyobject.User.username} and price is ${anyobject.User.price}`);
    
 }
 //handalobject(User)
 /*
      console.log(`username is ${anyobject.User.username} and price is ${anyobject.User.price}`);
                                              ^

TypeError: Cannot read properties of undefined (reading 'username')

*/

function handalobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
 }

 handalobject(User)
 /*
     username is ankit and price is 999
  */   


     handalobject({
        username:"anand",
        price:444
     })
/*
     username is anand and price is 444
*/          

// ***************************** how to handal array in function *********************
const myarray=[10,50,7,80,90];
function returnseconddata(getarray){
    console.log(` second data is `);
    return getarray[2];
    
}
console.log(returnseconddata(myarray));
/*
      second data is 
       7
*/

console.log(returnseconddata[200,500,400,300]);
