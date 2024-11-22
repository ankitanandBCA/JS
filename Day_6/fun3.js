// scope and hosting and nesting function

function one()
{
    const username="ankit anand"
      
    function two() {
        const website="youtube"
        console.log(username);
    }
    // console.log(website);
    
    two()
}

one()

// basic understand of scope 
// ankit anand ====== output


if(true)
{
    const username="aman kumar"
    if(username==="aman kumar")
    {
        const website="github"
        console.log(username+website);
        
    }
   // console.log(website);
    
}


//   aman kumargithub    ===== output



//***************  second wau to define the object ****************** */

const addtwo=function(num)
{
    return num+2;
}
console.log(addtwo(5));
// 7