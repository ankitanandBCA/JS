// there are two type of define object 
/*

   1. singleton
   2. literals

 */

   const JsUser={}
   console.log(JsUser)
   /*
      {} == empty object
   */
  
      const User={
        name:"ankit",
        age:24,
        location:"patna",
        email:"ankit@gmail.com",
        isLoggedIn:"false",
        LastLoggin:["monday","saturday"]
        
      }

      // access the object
      console.log(User.name)    //  ankit
      console.log(User.email);   // ankit@gmail.com

    console.log(User);
    /*
         {
  name: 'ankit',
  age: 24,
  location: 'patna',
  email: 'ankit@gmail.com',
  isLoggedIn: 'false',
  LastLoggin: [ 'monday', 'saturday' ]
}

*/

// best way to access object data
console.log(User["email"]);  //  ankit@gmail.com

// change the object value 
User.email="aman@gmail.com";
console.log(User.email);  // aman@gmail.com

     console.log(User);
   /*
             {
  name: 'ankit',
  age: 24,
  location: 'patna',
  email: 'aman@gmail.com',
  isLoggedIn: 'false',
  LastLoggin: [ 'monday', 'saturday' ]
}
  
*/

// can't change object value in runtime ya compile time to use "freeze "
//Object.freeze(User)
User.email="yadav@gmail.com"
console.log(User)

/*
   {
  name: 'ankit',
  age: 24,
  location: 'patna',
  email: 'aman@gmail.com',
  isLoggedIn: 'false',
  LastLoggin: [ 'monday', 'saturday' ]
}

*/

// ***************************************************************
//      IMPORTANT THINK ABOUT OBJECT IN JAVASCRIPT


User.greeting=function(){
    console.log("hello js user");
    
}

console.log(User.greeting);
// [Function (anonymous)]
console.log(User.greeting());
// hello js user

User.greetingTwo=function(){
    console.log('hello js user,$(this.email)');
    
}

console.log(User.greetingTwo);
// [Function (anonymous)]
console.log(User.greetingTwo());
// hello js user,aman@gmail.com