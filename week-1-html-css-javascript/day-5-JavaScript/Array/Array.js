// Declare an empty array;

const question1 = [];
console.log(question1)

// Declare an array with more than 5 number of elements

const question2 = [1,2,3,4,5,6,7,8];
console.log(question2)

// Find the length of your array;

const question3 = [1,2,3,4,5,6,7,8];
console.log(question3.length);

//Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5

const mixedDataTypes = ['aditi', 7, true, [1,3], undefined, 'do-it', 'yes'];
console.log(mixedDataTypes);

// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon

const IT_companies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'
];
console.log(IT_companies);

//Print the number of companies in the array

console.log(IT_companies.length);

// Print the first company, middle and last company
const firstCompany = IT_companies[0];
const middleIndex = Math.floor(IT_companies.length/2);
const middleCompany = IT_companies[middleIndex]
const lastCompany = IT_companies[IT_companies.length-1];

console.log("First Company:-",firstCompany);
console.log("Middle Company:-",middleCompany);
console.log("Last Company:-",lastCompany);

// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found

IT_companies.includes('Facebook')? console.log('yes,this company exits') : console.log('Company not found');

// Filter out companies which have more than one 'o' without the filter method

IT_companies.includes('o')

// Reverse the array using reverse() method
const reverseComapny = IT_companies.reverse();
console.log(reverseComapny);

// Slice out the first 3 companies from the array
const slicedOut = IT_companies.slice(0,3);
console.log(slicedOut);

//In the following shopping cart add, remove, edit items

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

// add 'Meat' in the beginning of your shopping cart if it has not been already added

const adding = shoppingCart.unshift('Meat');
console.log(shoppingCart);

// add Sugar at the end of you shopping cart if it has not been already added

const addingLast = shoppingCart.push('Sugar');
console.log(shoppingCart)

// use push method:=
const hello = [1,2,3,4];
hello.push(5);
console.log(hello)

// use pop method
hello.pop();
console.log(hello)

// using shift method
hello.shift();
console.log(hello)