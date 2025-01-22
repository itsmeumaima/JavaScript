const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// ----------Filter-----------
// myNumers.filter((num)=>num>4)  no output

const newnum=myNumers.filter((num)=>num>4)
console.log(newnum)
// OR
const no=myNumers.filter((num)=>{
    return num>4
})
console.log(no)
// ----------Map---------------
const num=[1,2,3,4,5,6,7,8,9,10]
// const newNums = num.map( (nums) => { return nums + 10})
// const newNums = num.map((nums) => nums*10)
                        // .map((nums)=> nums+1)

//-----------Reduce----------
// const number=[1,2,3]
// const total=number.reduce( function(acc,current){
//     return acc+current
// },0)

// console.log(total)

// OR
// const total=number.reduce((acc,curr)=>acc+curr,0)
const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);