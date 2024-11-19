const marval_hero=["thor","ironman","spiderman"];
const dc_hero=["superman","flash","badman"];

marval_hero.push(dc_hero);
console.log(marval_hero);


/*
[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'badman' ] ]
 */

const con=marval_hero.concat(dc_hero);
console.log(con);
/*
[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'badman' ]
 */

const anothor_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]];
let des=anothor_array.flat(Infinity);
console.log(des);

/*

[
  1, 2, 3, 4, 5,
  6, 7, 6, 7, 4,
  5
]

*/

console.log(Array.from("ankit"))
/*
[ 'a', 'n', 'k', 'i', 't' ]
*/

let scroe1=100;
let scroe2=200;
let scroe3=300;

console.log((Array.of(scroe1,scroe2,scroe3)));
/*
[ 100, 200, 300 ]
 */