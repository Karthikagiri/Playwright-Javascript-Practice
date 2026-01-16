

function runTest(testType){

switch(testType){

    case 'sanity':
        console.log('This is sanity Test');
        break;
    case 'Regression':
        console.log('This is Regression Test');
        break;
    case 'EndToEndTest':
        console.log('This is End-to-End Test');
        break;
    default:
        console.log('This is smoke Test');
}   
}

let testTypeA = 'Regression'
let testTypeB = 'EndToEndTest'
let testTypeC = 'sanity'
let testTypeD = 'smoke'

runTest(testTypeA)
runTest(testTypeB)
runTest(testTypeC)
runTest(testTypeD)
 