let sym=Symbol('key1')
let obj={
    name:"Umaima",
    age:19,
    gmail:"umaima@gmail.com",
    [sym]:"newkey"
}
console.log(obj)
obj.greeting=function(){
    console.log('Welcome User')
}
console.log(obj.greeting())
obj.greeting()

obj.welcome=function(){
    return `Welcome User, ${this.name}`
}
console.log(obj.welcome())

const regular={
    gmail:'umaima@gmail.com',
    fullname:{
        username:{
            name:"Umaima",
            fathername:"Abdul Rauf"
        }
    }
}
console.log(regular.fullname.username.name)
const obj1={
    1:'a',
    2:'b'
}
const obj2={
    3:'c',
    4:'d'
}

// const obj3=Object.assign(obj1,obj2)
// OR
const obj3=Object.assign({},obj1,obj2)
console.log(obj3)

console.log(Object.keys(obj));
console.log(Object.values(obj))