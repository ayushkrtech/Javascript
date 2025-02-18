const user = {
    username : "hitesh",
    price : 333,

    welcomemessage: function(){
        console.log(`${this.username},welcome to website`)
        console.log(this);
        
    }
}
// user.welcomemessage()
// user.username = "ayush"
// user.welcomemessage()

// console.log(this);

// function chai(){
//     let username = "ayush"
//     console.log(this)
// }
// chai()



const chai =  () => {
    let username = "ayush"
    console.log(this)
}
//chai()

// const addtwo = (num1,num2) => {
//     return num1+num2
// }

const addtwo = (num1,num2) => (num1+num2)
console.log(addtwo(3,5))

const myarray = [2,3,4,5,6]
// myarray.forEach()
