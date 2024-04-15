
// Anonymous function
let printOddNumbers = function(arr) {
    for (let num of arr) {
        if (num % 2 !== 0) {
            console.log(num);
        }
    }
};

// IIFE
(function(arr) {
    for (let num of arr) {
        if (num % 2 !== 0) {
            console.log(num);
        }
    }
})([1, 2, 3, 4, 5]);


// Anonymous function
let titleCaps = function(arr) {
    return arr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
};

// IIFE
let titleCapsResult = (function(arr) {
    return arr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
})(["hello", "world", "javascript"]);
console.log(titleCapsResult);


// Anonymous function
let sumOfNumbers = function(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
};

// IIFE
let sum = (function(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
})([1, 2, 3, 4, 5]);
console.log(sum);


// Anonymous function
let getPrimeNumbers = function(arr) {
    return arr.filter(num => {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    });
};

// IIFE
let primeNumbers = (function(arr) {
    return arr.filter(num => {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    });
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(primeNumbers);


// Anonymous function
let getPalindromes = function(arr) {
    return arr.filter(str => str === str.split('').reverse().join(''));
};

// IIFE
let palindromes = (function(arr) {
    return arr.filter(str => str === str.split('').reverse().join(''));
})(["level", "hello", "radar", "world", "madam"]);
console.log(palindromes);


// Anonymous function
let medianOfArrays = function(arr1, arr2) {
    let mergedArray = arr1.concat(arr2);
    let sortedArray = mergedArray.sort((a, b) => a - b);
    let mid = Math.floor(sortedArray.length / 2);
    return sortedArray.length % 2 !== 0 ? sortedArray[mid] : (sortedArray[mid - 1] + sortedArray[mid]) / 2;
};

// IIFE
let median = (function(arr1, arr2) {
    let mergedArray = arr1.concat(arr2);
    let sortedArray = mergedArray.sort((a, b) => a - b);
    let mid = Math.floor(sortedArray.length / 2);
    return sortedArray.length % 2 !== 0 ? sortedArray[mid] : (sortedArray[mid - 1] + sortedArray[mid]) / 2;
})([1, 3, 5], [2, 4, 6]);
console.log(median);


// Anonymous function
let removeDuplicates = function(arr) {
    return [...new Set(arr)];
};

// IIFE
let uniqueArray = (function(arr) {
    return [...new Set(arr)];
})([1, 2, 2, 3, 3, 4, 4, 5, 5]);
console.log(uniqueArray);


// Anonymous function
let rotateArray = function(arr, k) {
    let len = arr.length;
    k = k % len;
    return arr.slice(k).concat(arr.slice(0, k));
};

// IIFE
let rotatedArray = (function(arr, k) {
    let len = arr.length;
    k = k % len;
    return arr.slice(k).concat(arr.slice(0, k));
})([1, 2, 3, 4, 5], 2);
console.log(rotatedArray);
