
const nums =[2,4,5,2,1,2]
const k = 2
let result = 0

console.log(nums.length)
console.log(nums.length-1)

for (i=0;i<nums.length;i++){
    if (nums[i]===k){
        result = result+1;
        
    }
    
}
console.log(result)
