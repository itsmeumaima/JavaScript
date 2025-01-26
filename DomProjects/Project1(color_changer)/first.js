const buttons=document.querySelectorAll('.button');
const body=document.querySelector("body");
const canvas=document.querySelector('.canvas');

buttons.forEach(function (button){
    button.addEventListener('click',function(e){
        // console.log(e.target)
        body.style.backgroundColor=e.target.id;
        canvas.style.backgroundColor=e.target.id;
        
    })
})