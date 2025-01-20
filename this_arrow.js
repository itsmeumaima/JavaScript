const user={
    username:'Umaima',
    price:999,
    welcome: function(){
        console.log(`${this.username} , Welcome `);
        console.log(this)
    }
}
// user.welcome  get an error
// user.welcome();
// user.username='Ayesha'
// user.welcome();

function greeting(){
    const user='Umaima'
    console.log(this)
    console.log(this.user)  // undefined (not work in function)
}
// greeting();

//Another way to declare function
const greet=()=>{
    console.log(this);
    console.log('wELCOME');
}
// greet()

// Implicit return
const add=(n1,n2)=> (n1+n2)

console.log(add(4,8));
// if we use {} then we have to write the return keyword

// Immediately Invoked Function Expression (IIFE)
(function welcome(){
    console.log('Hello world');
})();

((num1,num2)=>{
    console.log(num1+num2)
})(4,9);