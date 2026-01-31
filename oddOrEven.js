/* let n;
function isOddOrEven()
{
for(n=1; n<= 25; n++)
{
if (n%2 === 0){
console.log(`Given number ${n} is even`);
}
else {
console.log(`Given number ${n} is odd`);
}
}
}

isOddOrEven(); */
 
function getUserData(a,b,exampleCallBack){

    console.log(`First name is ${a}`)
    console.log(`First name is ${b}`)

    setTimeout(()=> {
    console.log (`CallBack function going to execute `)
    exampleCallBack()
    },3000)


}
function exampleCallBack(){

    console.log (`CallBack function executed `)

}

getUserData("test","Leaf",exampleCallBack)


