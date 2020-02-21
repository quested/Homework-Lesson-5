//Задача 1
var numbers = [1, 5, 99, 43, 101];
var sum = 0;

for (let num of numbers) {
    sum += num;
}
console.log(sum);


numbers.forEach(function(item) {
    sum += item;
}
)
console.log(sum);



//Задача 2
var newNumbers = [10, 50, 9, 4, 2];
var result = [];

for (let i = 0; i < numbers.length; i++) {
    result[i] = numbers[i] + newNumbers[i];
}
console.log(result);


numbers.forEach(function(item, i) {
    result[i] = item + newNumbers[i];
}
)
console.log(result);



// Задача 3
var newSum = 0;

numbers.forEach(function(item, i) {
    newSum = newSum + item + numbers[i] + newNumbers[i];
}
)
console.log(newSum);



// Задача 4
var newResult = [];

for (let i = 0; i < numbers.length; i++) {
    newResult[i] = Math.pow(numbers[i], 2);
}
console.log(newResult);


var newResult1 = numbers.map(function(item) {
    return Math.pow(item, 2);
}
)
console.log(newResult1);



// Задача 5
var names = ['Vlad', 'Max', 'Lena', 'Masha'];


for (i = 0; i < names.length; i++) {
    var copyNames = [];
    if (i.length < 4) {
        copyNames[i] = names[i];
    } //не работает цикл, не пойму почему
}
console.log(copyNames);


var newNames = names.filter(function(item) {
    return item.length < 4;
}
)
console.log(newNames);
