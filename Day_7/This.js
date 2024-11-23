const user={
    username:"ankit anand",
    course:"js",
    price:999,

    message:function()
    {
     console.log("hello js user....");
     
    }
}

console.log(user)
/*
   {
  username: 'ankit anand',
  course: 'js',
  price: 999,
  message: [Function: message]
}

*/

const user1={
    username:"ankit anand",
    course:"js",
    price:999,

    message:function()
    {
     console.log(`${this.username},hello js user...`);
     
    }
}
/*
  {
  username: 'ankit anand',
  course: 'js',
  price: 999,
  message: [Function: message]
}
  */

user1.username="sam"
/*
console.log(user1)
{
    username: 'sam',
    course: 'js',
    price: 999,
    message: [Function: message]
  }

  */

  user1.message()  // ===>   sam,hello js user...



  const user2={
    username:"ankit anand",
    course:"js",
    price:999,

    message:function()
    {
     console.log(`${this.username},hello js user...`);
     console.log(this);
     
    }
}

console.log(user2);
/*
   {
  username: 'ankit anand',
  course: 'js',
  price: 999,
  message: [Function: message]
}

*/

console.log(this); //  {}

function chai()
{
    console.log(this);
    
}

chai()

/*
               <ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  crypto: [Getter]
}


*/




function chai_code()
{
     name:"Suman kumar"
    console.log(this.name);
    
}

chai_code()   //  undefined

