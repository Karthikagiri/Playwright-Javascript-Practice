
//Example 1: Split a string into an array of words

/* const str = "hello world";
const words = str.split(" ");
console.log(words); // ["hello", "world"]
console.log(typeof words); // "object"



const lastWord = words[words.length -1]; // "world"
console.log(lastWord); // "world"
console.log(lastWord.length); // 5 */


//Example 2: Find the length of the last word in a string

/* 
const strt2 = "fly me to the moon";
const noOfChars =strt2.split(" ");
console.log(noOfChars.length); // 5
const lastword = noOfChars[noOfChars.length -1]; // "moon"
console.log(lastword); // "moon"
for(i=0;i<=lastword.length-1;i++){
 
    console.log(lastword[i]);
}
console.log(`lenght of the last word is ${i}`); // 4
 */

//write a program to check if the String is anagram or not

let str1="Listen";
let str2="Silent";

let str3="Hello";
let str4="World";


function isAnagram(str1,str2){

let arrayvar1=str1.toLowerCase().split("").sort().join("");
let arrayvar2=str2.toLowerCase().split("").sort().join("");
console.log(arrayvar1);
console.log(arrayvar2);

if(arrayvar1===arrayvar2){
    console.log(`${arrayvar1} and ${arrayvar2} are anagram`);
}
else{
    console.log(`${arrayvar1} and ${arrayvar2} are not anagram`);
}
}

isAnagram(str1,str2);
isAnagram(str3,str4);