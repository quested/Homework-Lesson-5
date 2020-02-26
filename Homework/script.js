//Задача 1
var numbers = [1, 5, 99, 43, 101];

function sumNumbers(numbers) {
    var sum = 0;

    for (let num of numbers) {
        sum += num;
    }

    return sum;
};

sum = sumNumbers(numbers);
console.log(sum);


var sum2 = 0;

numbers.forEach(function(item) {
    sum2 += item;
});

console.log(sum2);



//Задача 2
var newNumbers = [10, 50, 9, 4, 2];

function sumArrs(numbers, newNumbers) {
    var result = [];

    for (let i = 0; i < numbers.length; i++) {
        result[i] = numbers[i] + newNumbers[i];
    }

    return result;
};

result = sumArrs(numbers, newNumbers);
console.log(result);


numbers.forEach(function(item, i) {
    result[i] = item + newNumbers[i];
});

console.log(result);



// Задача 3
function sumThreeArrs(numbers, newNumbers, result) {
    var newSum = 0;

    for (i = 0; i < numbers.length; i++) {
        newSum = newSum + numbers[i] + result[i] + newNumbers[i];
    }

    return newSum;
};

newSum = sumThreeArrs(numbers, newNumbers, result);
console.log(newSum);


var newSum2 = 0;

numbers.forEach(function(item, i) {
    newSum2 = newSum2 + item + result[i] + newNumbers[i];
});

console.log(newSum2);



// Задача 4
function quadrateArrs(numbers) {
    var newResult = [];

    for (let i = 0; i < numbers.length; i++) {
        newResult[i] = Math.pow(numbers[i], 2);
    }

    return newResult;
};

newResult = quadrateArrs(numbers);
console.log(newResult);


var newResult1 = numbers.map(function(item) {
    return Math.pow(item, 2);
});

console.log(newResult1);



// Задача 5
var names = ['Vlad', 'Max', 'Lena', 'Masha'];

function namesFourLetters(names) {
    var copyNames = [];

    for (i = 0; i < names.length; i++) {
        if (names[i].length < 4) {
            copyNames.push(names[i]);
        }
    }

    return copyNames;
};

copyNames = namesFourLetters(names);
console.log(copyNames);


var newNames = names.filter(function(item) {
    return item.length < 4;
});

console.log(newNames);
