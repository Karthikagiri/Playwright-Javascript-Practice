let a = `level`
let b = 'TestLeaf'
let reverseString2 = '';
let reverseString = '';

function isPalindrome(x) {
    
/* let z = x.split('');
console.log(z); */
    
    for (let i =x.length - 1; i >= 0; i--) {
        console.log(x[i]);
        reverseString = reverseString + x[i]
    }   
    console.log(reverseString);     
    
    if (x === reverseString) {
        console.log(`${x} is a Palindrome string`);  

    }
    else {
        console.log(`${x} is not a Palindrome string`);
    }

     reverseString = reverseString2;
    
}

isPalindrome(b)
isPalindrome(a)


/* let a = 'level'
let reverseString = '';

function isPalindrome(x) {
    
let z = x.split('');
console.log(z);
    
    for (let i =x.length - 1; i >= 0; i--) {
        console.log(x[i]);
        reverseString = reverseString + x[i]
    }   
    console.log(reverseString);     
    
    if (x === reverseString) {
        console.log(`${x} is a Palindrome string`);
    }
    else {
        console.log(`${x} is not a Palindrome string`);
    }
}

isPalindrome(a) */

