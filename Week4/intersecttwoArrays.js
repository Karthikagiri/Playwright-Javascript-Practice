
const array1 =[2,5,9,3,2,7,4]
const array2 =[2,3,4,8,2,5,1]
let intersect =[]

function  intersectionOfArrays(array1,array2){

    console.log(array1.length);
    console.log(array2.length);

for(i=0;i<array1.length;i++){
    for(j=0;j<array2.length;j++){

        if(array1[i]===array2[j]){

            for(k=0;k<intersect.length;k++){
            
                if(array1[i] === intersect[k]){
                    break;
                }
            } 

            if(k === intersect.length){
                intersect.push(array1[i]);
            }
        }

    }
    }
}
intersectionOfArrays(array1,array2);
console.log(intersect);