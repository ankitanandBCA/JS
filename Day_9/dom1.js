const a=document.getElementById("fh");
a.id;
a.className;
a.getAttribute("id")
a.getAttribute("class")

a.setAttribute("class","test")
a.getAttribute("class")

a.style.color="blue";
a.style.backgroundColor="yellow"
a.style.padding="35px";
a.style.border="2px solid black";
a.style.borderRadius="15px";


//      --------------------------------------------

a.textContent  
a.innerHTML
a.innerText

//   QUERY SELECTOR (IT ONLY SELECT ONE OF ASSINDING ORDER)
//----------------------------------------------------------
a.querySelector("h1");   // to select element
a.querySelector("#fh")   // to select id
a.querySelector(".heading")   // to select class
a.querySelector("input[type="password"]");



const u=a.querySelector("ul")
console.log(u);
const g=document.querySelector("li");
g.style.backgroundColor="blue";
g.style.padding="10px";
g.style.innerText="five"


//   QUERY SELECTORALL ( all element are selected) )
//----------------------------------------------------------
const g1=document.querySelector("li");
g1[0].style.backgroundColor="blue";
g1[0].style.padding="10px";
g1[0].style.innerText="five"

//  it's behave like array

//------------------------------------------------

const temp=document.getElementsByClassName("s");
const ConA=Array.from(temp);
ConA.forEach(function (l){
    l.style.color="white";
    l.style.innerText="hello ";
})
