"use strict";
let age = 50;
let club = 'Barselona';
let isFamous = false;
function add(num1, num2) {
    return num1 + num2;
}
add(3, 74);
console.log(club);
function fullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}
const user = fullName('Martin', 'Rock');
function doubleItAndConsole(num) {
    const result = num * 2;
    console.log(result);
}
doubleItAndConsole(10);
const myArrow = (x, y) => x * y;
console.log(myArrow(12, 12));
let multiply2;
multiply2 = (x, y) => x * y;
console.log(multiply2(10, 10));
const numbers = [2, 12, 3, 4, 5, 77];
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
}
const friends = ['Hamidul', 'Shammi', 'Tafheem Islam', 'Rubel'];
let bigName = '';
for (let i = 0; i < friends.length; i++) {
    const friend = friends[i];
    if (friend.length > bigName.length) {
        bigName = friend;
    }
}
console.log('Friend with largest name :', bigName);
//Object
let friendStructure = {
    name: 'Hamidul',
    age: 42,
};
const messy = {
    name: 'Messy',
    club: 'Barcelon',
    salary: 4500000,
    wife: 'Some One',
    isPlaying: true
};
const ronaldo = {
    name: 'Ronaldo',
    club: 'Leverpool',
    salary: 450000,
    isPlaying: true
};
//Class
class Person {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
const sam = new Person('Samuel');
console.log(sam.getName());
