let number = 15;
number = 10;
console.log(number);

const name = "Collin";
console.log(name);
var number2 = 0;
//number
number2 = 10;
let x = 2;
let y = 2.5;
let z = x + y;
let b = 100000;
console.log(2 ** 4);
//string
const name2 = `good 
jdasfjb`;
console.log(name2);
//concantenation
let sentence = "hi";
let sentence2 = "bye";
let sentence3 = sentence + " " + sentence2;
//${} - template literall
let sentence4 = `hi my name is branden. ${sentence2}`;
console.log(sentence4);
let o = 200;
let s = `${0}`;
let num = "20,000";
let num2 = 20;
console.log(num + num2);
const num3 = 10;
console.log(num3);

//booleans

//truthy - anything w value
//1
//'great'
//'true'

//falsy - undefined. no vaule
//0
//''
//false
//undefined
//null

console.log(Boolean(null));

//template literal

//array

const emptyArr = [];
console.log(emptyArr);
const lengthOfEmptyArray = emptyArr.length;
console.log(lengthOfEmptyArray);

const name1 = "Branden";

const nameArr = ["Branden", "collin"];
console.log(name1);
const lengthOfEmptyArray1 = nameArr.length;
console.log(lengthOfEmptyArray);

console.log(nameArr[1]);

const hello = `hi my name is ${nameArr[1]}`;
console.log(hello);

nameArr.push("Cortez");
nameArr.push("Romeo ");
console.log(nameArr);

console.log(nameArr.pop());

console.log(nameArr.length - 1);

// For Loops
// Repeats a task or code a certain number of times based on a condition

//split() - splits a string by the specified character
//join () - joins array elements between a specified character
let arr1 = [`branden`, `will`, `emily`];
console.log(arr.join(`a`));

//Traditionall for loop//
// 1. initializer 2. condtion 3. iterator
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// for of loop
for (char of arr) {
  console.log(char);
}

let string = "branden";
for (char of string) {
  console.log(char);
}

//while loop
let j = 0;
while (j < 5) {
  console.log(j);
  j++;
}

let word = `hi`
let attemps = 0
let arr = []
let characters = 'abcdefghijklmnopqrstuvwxyz'
let charArray = characters.split('')

while (arr.join(``) != word) {
    arr = []
    for (char of word) {
        arr.push(charArray[Math.floor(Math.random() * charArray.length)])
    }
    console.log(arr.join(''))
}

let numbers = [4,1,10,100,32,5]
for (let i = 0; i < numbers.length; i++) {
console.log(numbers[i])
} 