/* let fruits = ['Яблоко', 'Апельсин', 'Слива'];
// Длина масива = 3
// Последний индекс = 2(Длина массива-1)
// Массив['Яблоко', 'Апельсин', 'Слива']
// Индексы:   0          1         2

console.log(fruits);

fruits[1] = 'Мандарин';

console.log(fruits);

fruits[3] = 'Груша';

//Длина массива
console.log(fruits.length);

let arr = ['Яблоко', {name: 'Jon'}, true, function() { console.log('Hello!'); }];

console.log(arr[1].name);
arr[3]();

//function sum() = {
//    2+3;
// }
// sum()
console.log(fruits);
console.log(fruits[fruits.length - 1]);
console.log(fruits.at(0));

// Метод at() - возвращает элемент массива с заданным индексом
// array.at(-1) - возвращает последний элемент в массиве

// Очередь
// shift <= * * * <= push

// Стек
// |||||| <= push pop=>

console.log (fruits);

// pop - удаляет последний элемент из массива и возвращает его

let temp = fruits.pop();
console.log(fruits);
console.log(temp);

// push - добавляет элемент в конец массива

fruits.push('Манго');
console.log(fruits);

// shift - удаляет из массива первый элемент и возвращает его
temp = fruits.shift();
console.log(fruits);

// unshift - Добавляет элемент в начало массива
fruits.unshift('Персик', 'Клубника');
console.log(fruits);

let fruits2 = fruits;
fruits.pop();
console.log(fruits);
console.log(fruits2);


// Массив: [ 1 2 3 4 ]
// Индексы:  0 1 2 3

// let fruits = ['Яблоко', 'Апельсин', 'Слива'];
// 
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

for (let key of fruits) {
    console.log(key);
}
*/

// Задание 1

let numbers = [1, 2, 3];

console.log(numbers);

// Задание 2

let names = ['Jon', 'Sergey', 'Alexander'];

console.log(names)

// Задание 3

let arr = [1, 2, 3];
function count(arr) {
    let sum = 0;
    arr.forEach(function(item){
        sum += item
    })
    return sum;
}
count(arr);

console.log(count(arr));

//Задание 4

let arr2 = ['a', 'b', 'c', 'd', '+'];
console.log (arr2[0],arr2[4],arr2[1],arr2[4],arr2[2],arr2[4],arr2[3]);

//Задание 5

let arr3 = ['Lemon', 'Orange', 'Grapefruit'];
console.log (arr3.length);

//Задание 6

let arr4 = ['Watermelon', 'Item', 'Box'];
console.log (arr4[2]);

//Задание 7

let arr5 = ['a', 'b', 'c'];
arr5[0] = '1';
arr5[1] = '2';
arr5[2] = '3';
console.log(arr5);

//Задание 8

let arr6 = [1, 2, 3];
arr6[0] += 3;
arr6[1] += 3;
arr6[2] += 3;
console.log(arr6);

//Задание 9

let arr7 = [1, 2, 3, 4, 5];
arr7.push(6, 7, 8, 9, 10);
console.log(arr7);

//Задание 10

let arr8 = [10, 12, 14, 16, 18, 20];
arr8.push(22, 24, 26, 28, 30, 32, 34, 36, 38, 40);
console.log(arr8);

//Задание 12

for (let i = arr8.length - 1; i >= 0; i--) {
    console.log(arr8[i]);
}

//Задание 13

let arr9 = [1, 2, 3]
function maxElement (arr9){
    let max;
    let min = arr9[0];
    for(let i = 0; i < arr9.length; i++){
        if((arr9[i]) < min){
            min = arr9[i]; 
        } else {
            max = arr9[i];
        }
    }
    return max;
}

console.log(maxElement(arr9));

//Задание 14

let array = [2, 5, 9];
array.indexOf(3);