/*
1. even number print use of list
2. factorial number
3. multiplication table
4. sum of natural number
5. find largest number
6. leap year check
*/

//1. print even numbers from a list

function printEvenNumbers(list) {
    console.log("Even numbers:--");
    list.forEach(num => {
        if (num % 2 === 0) {
            console.log(num);
        }
    });
}

//2. factorial of a number
function factorial(n) {
    if (n<0) {
        return ("factorial does not exist for negative numbers");
    }
    let fact = 1;
    for (let i=1; i<=n; i++) {
        fact = fact*i;
    }
    return fact;
}

//3. multiplication table of a number
function multiplicationtable(n) {
    console.log(`multiplication table of ${n}:`);
    for (let i=1; i<=10; i++) 
    {
        console.log(`${n} * ${i} = ${n*i}`);
    }
}


//4. sum of first n natural numbers
function sumOfNaturalNumbers(n) {
    return (n * (n + 1)) / 2;
}

//5. find largest number in a list
function findLargestNumber(list) {
    return Math.max(...list);
}


//6. check if a year is a leap year
function isleapyear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}


// Exporting functions for use in other modules
module.exports = { printEvenNumbers,
    factorial,
    multiplicationtable,
    sumOfNaturalNumbers,
    findLargestNumber,
    isleapyear
};