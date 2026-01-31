/* 
//Task 1 Function declaration
function userProfile(name){
    
console.log(`userProfile name is ${name}`)

}
let a = Alice
userProfile(a)
 */

//Task 2: Anonymous Fuction
 // if the export key word is present infront of the anonymous function , we can import it in any other function 
/* let exampleAnonymous = function(){

    console.log('Anonymous Function called')

    setTimeout(() => {

     console.log ('This message will be printed after 2 sec delay') ; 
        
    }, 2000);


}
exampleAnonymous()
 */

/* 
// task 3 Arrow function

let double = (n)=>{

    let n = n+n;

    console.log (`Given Vlaue is ${n} doubled`)

}
double(2)
double(44) */

// task 4 callback function example 


function getUserData(a,b,exampleCallBack){

    console.log(`First name is ${a}`)
    console.log(`Last name is ${b}`)

    setTimeout(()=> {
    console.log (`CallBack function going to execute `)
    exampleCallBack()
    },3000)


}
function exampleCallBack(){

    console.log (`CallBack function executed `)

}

getUserData("test","Leaf",exampleCallBack)