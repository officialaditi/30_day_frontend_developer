// iterate over an array and print that

const fruits = ['apple', 'banana', 'watermelon', 'papaya'];

for(let fruit of fruits ){
    console.log(fruit)
}

// use an for-of loop and print the char of string

const string = 'Aditi';

for (let char of string){
    console.log(char)
}

// loop over an array of object

const users = [{username: 'Aditi', age: 22},{username: 'John', age: 25}, {username: 'Mary', age: 20}];

for(let user of users){
    console.log(`Hello ${user.username} you age is :- ${user.age    } `)
}