// map :-

const nums = [1, 2, 3, 4];
const usingMap = nums.map((num) => num * 2);
console.log(usingMap);

const names = ["ufffAditi", "Harry Potter", "Harmonie Ganger", "Ron Weasely"];
const printName = names.map((name) => name);
console.log(printName);

// make all the name in captial letter:-

const fruitName = ["apple", "banana", "strawberry", "watermelon"];
const print = fruitName.map((fruit) => fruit.toUpperCase());
console.log(print);

// return the name in caps:-

let students = [
    {name: 'Aditi', rollNumber: 21, marks: 88},
    {name: 'Saurabh', rollNumber: 35, marks: 70},
    {name: 'Tanvi', rollNumber: 32, marks: 60},
    {name: 'Tanmay', rollNumber: 22, marks: 90}
];

const capsName = students.map((studName) => studName.name.toUpperCase());

console.log(capsName);