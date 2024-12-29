

const ages = [30, 27, 25, 19];
const checkAge = ages.filter((age) => age < 20);
console.log(checkAge)

const words = ['aditi', 'snapchat', 'instagram', 'youtube'];
const checkWords = words.filter((word) => word.length > 5);
console.log(checkWords)

// return the only detail of student who scored more then 60 marks


let students = [
    {name: 'Aditi', rollNumber: 10, marks: 88},
    {name: 'Saurabh', rollNumber: 12, marks: 70},
    {name: 'Tanvi', rollNumber: 14, marks: 50},
    {name: 'Tanmay', rollNumber: 30, marks: 90}
];

const check = students.filter((student) => student.marks > 60);
console.log(check)

// return only those details whose marks are more than 60 and rollnumber is greater than 15;

const checkMarks = students.filter((student) => {
    if(student.marks > 60 && student.rollNumber > 15){
        return student
    }

})
console.log(checkMarks)