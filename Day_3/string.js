const name="ankit"
const repoCount=50
//console.log(name+repoCount);

//console.log('hello my name is ${name}and my repoCount is ${r}');


// string is an object

const gameName=new String("AnkitA")
console.log(gameName)

console.log(gameName[0]);

console.log(gameName.length);

console.log(gameName.toUpperCase);

console.log(gameName.charAt(2));

const newstring = gameName.substring(0,4)
console.log(newstring);

const anotherStr=gameName.slice(-8,4)
console.log(anotherStr);

const str=" anand "
console.log(str);
console.log(str.trim);

const replace="https://ankit.com/ankit%20anand"
console.log(replace.replace('%20' , '_'));

console.log(replace.includes('yadav'));

console.log(gameName.split('_'));

