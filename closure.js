function add(){
    let num1=10
    let num2=20
    console.log(num1+num2)
}

add()
// console.log(num1)   get an error

function sub(){
    let num1=10;
    var num2=20;
    console.log(num2-num1);
}

sub()
// console.log(num2)

//Closure:
// A closure is a function that has access to its own scope, the outer function’s variables, and 
// global variables, even after the outer function has finished executing. This enables functions
// to “remember” their environment.

// Example of closure function
function outer() {
    let outerVar = "I'm in the outer scope!";
    function inner() {
        console.log(outerVar);
    }
    return inner;
}
const closure = outer(); 
closure();