const name = "mumu"
const repoCount = 10

// console.log(name + repoCount + " Value"); ---> old

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
//console.log(`////// ${varname} ..../// `)

const gameName = new String('siddiqua-hc-com') ///new -> object create  'mumu...' ekhane ei string object

// console.log(gameName[0]);    //0th key er value dekhabe
// console.log(gameName.__proto__);


 console.log(gameName.length);
 //console.log(gameName.toUpperCase());
//console.log(gameName.charAt(2));  // kon index a ki ache
//console.log(gameName.indexOf('t')); // reverse charAt

const newString = gameName.substring(0, 4)  //0 to 3 porjnto save hobe
//console.log(newString);

const anotherString = gameName.slice(-10, 8)// minus er jnoo reverse ashbe
//console.log(anotherString);

const newStringOne = "   mumu    "
//console.log(newStringOne);
console.log(newStringOne.trim()); // space cut kore

const url = "https://siddiqua%20mumu.com/"

console.log(url.replace('%20', '_'))
console.log(url.includes(':3'))
console.log(gameName.split('-')); // - er upr based kore split krbe