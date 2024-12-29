

const numbers = [1,2,3,4];
const sumOfAll = numbers.reduce((acc, curr) => {
    return acc += curr
}, 0)
console.log(sumOfAll)

// sum of the mark of all the student:-

let students = [
    {name: 'Aditi', rollNumber: 10, marks: 88},
    {name: 'Saurabh', rollNumber: 12, marks: 70},
    {name: 'Tanvi', rollNumber: 14, marks: 50},
    {name: 'Tanmay', rollNumber: 30, marks: 90}
];

const check = students.reduce((acc, currVal) => {
    return acc + currVal.marks
},0)
console.log(check)