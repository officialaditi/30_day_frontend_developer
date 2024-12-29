                                                        // selecting elements:-

let h1 = document.getElementById("h1");
console.log(h1);



                                                        // changing/ modifying html:-

//change h1 = learning,js to learning dom.

let heading = document.getElementsByClassName("heading")[0];
console.log(heading);
heading.textContent = "Hello, Learning DOM";


                                                        // changing css 
                                                        
// always using camelCase for targeting style if we have background-color= backgroundColor

heading.style.color = 'red';   
heading.style.backgroundColor = 'black'     

                                                       // adding event:-
let span = document.querySelector('span');
let btn = document.querySelector('.btn');
btn.addEventListener('click', function(){
    span.innerHTML = 'Hello you Click me'
})