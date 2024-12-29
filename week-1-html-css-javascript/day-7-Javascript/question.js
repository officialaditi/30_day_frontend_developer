let students = [
	{ name: "Aditi", rollNumber: 10, marks: 88 },
	{ name: "Saurabh", rollNumber: 12, marks: 45 },
	{ name: "Tanvi", rollNumber: 14, marks: 35 },
	{ name: "Tanmay", rollNumber: 30, marks: 90 },
];

// return only those who score more than 60 marks.

// combine 2 method => map, filter

const check = students
	.filter((stud) => {
		return stud.marks > 60;
	})
	.map((stud) => stud.name);
console.log(check);

// return the total marks for students with marks greater than 60, after adding 20 marks to the student who score less than 60

const Details = students
	.map((stud) => {
		if (stud.marks < 60) {
			stud.marks += 20;
		}
		return stud;
	})
	.filter((student) => student.marks > 60)
	.reduce((acc, currVal) => {
		return acc + currVal.marks;
	}, 0);

console.log(Details);
