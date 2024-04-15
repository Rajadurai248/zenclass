
let printOddNumbers = arr => arr.filter(num => num % 2 !== 0).forEach(num => console.log(num));

printOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);


let convertToTitleCaps = arr => arr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());

console.log(convertToTitleCaps(["hello", "world", "javascript"]));


let sumOfNumbers = arr => arr.reduce((acc, curr) => acc + curr, 0);

console.log(sumOfNumbers([1, 2, 3, 4, 5]));


let getPrimeNumbers = arr => arr.filter(num => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
});

console.log(getPrimeNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));


let getPalindromes = arr => arr.filter(str => str === str.split('').reverse().join(''));

console.log(getPalindromes(["level", "hello", "radar", "world", "madam"]));
