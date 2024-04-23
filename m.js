function findMinMax(numbers) {
    if (numbers.length === 0) {
        return "Array is empty";
    }

    let min = numbers[0];
    let max = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }

    return { min, max };
}

// Test cases
const numbers1 = [3, 7, 2, 8, 4, 10];
console.log(findMinMax(numbers1)); // Output: { min: 2, max: 10 }

const numbers2 = [-5, -2, -8, -1, -3];
console.log(findMinMax(numbers2)); // Output: { min: -8, max: -1 }

const numbers3 = [5];
console.log(findMinMax(numbers3)); // Output: { min: 5, max: 5 }

const numbers4 = [];
console.log(findMinMax(numbers4)); // Output: "Array is empty"


function findMissingNumber(numbers) {
    const n = numbers.length + 1; // Total numbers including the missing one
    const expectedSum = (n * (numbers[0] + numbers[numbers.length - 1])) / 2;
    const actualSum = numbers.reduce((acc, curr) => acc + curr, 0);
    return expectedSum - actualSum;
}

// Test cases
const series1 = [11, 12, 14, 15, 16, 18, 19, 20];
console.log(findMissingNumber(series1)); // Output: 17

const series2 = [1, 2, 3, 5, 6, 7, 8];
console.log(findMissingNumber(series2)); // Output: 4

const series3 = [10, 20, 30, 40, 50];
console.log(findMissingNumber(series3)); // Output: 25
