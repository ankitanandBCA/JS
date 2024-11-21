// in this page we can use object as a singleton

const TinderUser=new Object();
console.log(TinderUser);
// {}  empty object

TinderUser.id="123abc"
TinderUser.name="sam"
TinderUser.isLoggedIn="false"

console.log(TinderUser);
//                { id: '123abc', name: 'sam', isLoggedIn: 'false' }

console.log(Object.keys(TinderUser))
//                  [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(TinderUser))
//                    [ '123abc', 'sam', 'false' ]
console.log(Object.entries(TinderUser))
//                  [ [ 'id', '123abc' ], [ 'name', 'sam' ], [ 'isLoggedIn', 'false' ] ]

//************ How to chek this value present is object or not  */

console.log(TinderUser.hasOwnProperty('isLoggedIn'));
//    true


console.log(TinderUser.hasOwnProperty('age'));
// false


/* ****************************** Nesting Of Object ******************************************************************************** */

const RegularUser={
    email:"some@gamil.com",

    fullName:{
        age:23,
          UserName:{
            firstname:"ankit",
            lastname:"anand"
          }
    }
}

// access every object data
console.log(RegularUser.email);
// "some@gamil.com"
console.log(RegularUser.fullName);
// 23

console.log(RegularUser.fullName.UserName);

// firstname:"ankit",
          //  lastname:"anand"
console.log(RegularUser.fullName.UserName.firstname);

// ankit
console.log(RegularUser.fullName.UserName.lastname);
// anand


/*  OBJECT COMBINATION OF TWO OR MORE OBJECT  */

const obj1={1:'a',2:'b'};
const obj2={3:'a',4:'b'};

const obj3={obj1,obj2}
console.log(obj3);
//  { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }  
// this is not a best way 

// best way

const obj4=Object.assign({},obj1,obj2)
console.log(obj4)
// { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


// ******** fatch the database value *********

const user = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "A@gmail.com"
    }
];

console.log(user[0].id);    // Accessing the second user's id
console.log(user[0].email); // Accessing the second user's email
/*
   1
h@gmail.com

*/

console.log(user[1].id);    // Accessing the second user's id
console.log(user[1].email); // Accessing the second user's email

/*
   2
A@gmail.com

*/