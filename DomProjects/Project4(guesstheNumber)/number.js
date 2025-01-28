let rand=parseInt(Math.random()*100+1);
const btn=document.querySelector("#subt");
const userans=document.querySelector("#guessField");
const displayans=document.querySelector(".lowOrHi");
const guesses=document.querySelector(".guesses");
const remainingGuesses=document.querySelector(".lastResult");
const res = document.querySelector('.result');
const p=document.createElement("p");
console.log(rand)

let prevguess=[]
let numguess=1

let playgame=true

if (playgame){
    btn.addEventListener('click',function(e){
        e.preventDefault();
        const temp=parseInt(userans.value);
        console.log(temp)
        validateguess(temp)
    })
}
function validateguess(guess){
    if (isNaN(guess)){
        alert('Please Enter a valid number')
    }
    else if(guess<1){
        alert('Please Enter a number greater than 1')
    } 
    else if(guess>100){
        alert('Please Enter a number less than 100')
    }else{
        prevguess.push(guess)
        if (numguess==6){
            displayguess(guess)
            displaymessage(`Game Over! Random Number was ${rand}`)
            endgame()
        }
        else{
            displayguess(guess)
            checkguess(guess)
        }
    }
}

function checkguess(guess){
    if (guess==rand){
        displaymessage(`You guessed it right`)
        endgame()
    }else if(guess<rand){
        displaymessage(`Number is too Low!`)
    }
    else if (guess>rand){
        displaymessage(`Number is too High!`)
    }
}

function displayguess(guess){
    userans.value='';
    guesses.innerHTML+=`  ${guess}  `
    numguess+=1
    remainingGuesses.innerHTML=`${6-numguess}`
}

function displaymessage(message){
    displayans.innerHTML=`<h2>${message}`
}

function newgame(){
    btnnew=document.querySelector('#newGame')
    btnnew.addEventListener('click',function(e){
        rand=parseInt(Math.random()*100+1)
        prevguess=[]
        numguess=1
        guesses.innerHTML=''
        remainingGuesses.innerHTML=`${6-numguess}`
        userans.removeAttribute('disabled')
        res.removeChild(p)
        displaymessage('')
        playgame=true
        
    })
}
function endgame(){
    userans.value=''
    userans.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML='<h2 id="newGame">Start new Game</h2>'
    res.appendChild(p)
    playgame=false
    newgame();
}