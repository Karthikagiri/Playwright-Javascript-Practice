function isOddOrEven(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }

}
let a = 2
let b = 3
console.log('Given number is ' + a + ' and it is ' + isOddOrEven(a)); // "Even"
console.log('Given number is ' + b + ' and it is ' + isOddOrEven(b)); // "Odd"