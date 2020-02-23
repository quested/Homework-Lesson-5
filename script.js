// можно самостоятельно изучить ДОМ

var names = ['Dima', 'Max', 'Oleh', 'popov', 'dfdf'];
var ages = [25, 29, 27];
var colors = ['red', 'white', 'green'];

console.log(names[2]); //выводит вторую переменную в массиве, начиная с 0, 1, 2

names.push('Masha'); //добавляет в конец массива
console.log(names);

var copy = names.slice(0, 1);
console.log(copy);

var secondNames = ['popov', 'dfdf'];
console.log(names.concat(secondNames));

// names.splice(1, 2); //1 - это начиная с первого аргумента удалить 2 элемента
// console.log(names);

names.splice(1, 1, 'pasted'); //- это удаляет первый элемент и вставляет вместо него pasted
console.log(names);

var str = '1,2,3,4,5'; //из строки массив
console.log(str.split(','));

var arr = [1,2,5,4];
console.log(arr.join(' - '));

var arr = [];
console.log(Array.isArray(arr));  //проверка на массив

var arr2 = ['Dima', 'Max', 'Oleh', 'popov', 'dfdf'];
for (var i = 0; i < arr2.length; i++) {
    console.log(arr2[i]);
}



var users = [
    {name: 'Oleg', age: 15},
    {name: 'Max', age: 20},
    {name: 'Vlad', age: 15},
];

for (var i = 0; i < users.length; i++) {
    console.log(users[i].name);
    if (users[i].age > 16)
    console.log(users[i].age);
}

var arr3 = ['Dima', 'Max', 'Oleh', 'popov'];
arr3.forEach( function (item, index, arr){ //перебирает элементы arr3 и выполняет для них фукнцию function, аргументы функции item, index, arr стандартные
    console.log(item);
    console.log(index);
})

var numbers = [1, 5, 10, 4];
var sum = 0;

numbers.forEach( function (item) {
    sum +=item;  
}
)
console.log(sum);

