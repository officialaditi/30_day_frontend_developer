// Write a 'for' loop to print all odd numbers between 1 and 15.

for(let i = 1; i<=15; i++){
    if(i % 2 !== 0){
        console.log(i)
    }
}

// iterate over an 'array' using [for loop] and print each element

const fruit = ["apple", "banana", "grapes", "chikoo"];
for (let i = 0; i < fruit.length; i++) {
	console.log(fruit[i]);
}


// using 'for loop' print the number from 1 to 20 , but print 'frizz' for multiple of '3' and print 'buzz' for multiple of '5'

for(let i = 1; i<=20; i++){
  if(i%3==0 && i%5===0){
    console.log('Frizz-Buzz')
  } else if(i%3===0){
    console.log('Frizz')
  } else if (i%5===0){
    console.log('Buzz')
  } else{
    console.log(i)
  }
}