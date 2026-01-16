genderType = 'female'

function printGender(){
let color = 'brown'
console.log ("Function Scoped colour is : ", color);
console.log("Gender is in function scope : ", genderType)

if(genderType.startsWith('female')){
var age = 30
let colour = 'pink'
console.log ("Block Scoped colour is : ", colour);
console.log("Gender is in block scope : ", genderType)

}

console.log ("Age is: ", age);

}

printGender()
console.log("Gender is : ", genderType)