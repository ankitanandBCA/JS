const chai = () => {
    name:"ankit"
    console.log(this.name)
}
// undefind

const chai1 = () => {
    const name="ankit"
    console.log(name)
}
chai1()
//   ankit

const addTwo = (num1,num2) => {
    return num1+num2
}

console.log(addTwo(3,4))        //  7


/* *************************  IIFE ************************/
// IIFE for initializing 
(function chai() {
    console.log("DB connect...");
})();

/*
   A self-invoking function, also called an Immediately Invoked 
   Function Expression (IIFE), is a function that runs immediately after it is defined.
*/

( (Uname) =>{
   console.log(`DB connect .....${Uname}`);
   
})('ankit');