// singleton 

// object literals 
// object.create

const mysym = Symbol('keys1')


const jsuser = {
    name : "ayush" ,
    "full name":"ayush gautam" ,
    [mysym] : "mykeys1" ,
    age : "19" ,
    location : "kanpur" ,
    email : "ayush@gmail.com" ,
    isloggedin : false ,
    lastlogindays : ["monday","thursday"]
}
// console.log(jsuser.email)
// console.log(jsuser["email"])
// console.log(jsuser["full name"]);
// console.log(jsuser[mysym])

jsuser.email="aysuhgautam@yahoo.com"
// Object.freeze(jsuser)
jsuser.email="ayushgautam@gmail.com"
// console.log(jsuser);


jsuser.greeting = function (){
    console.log("hello jsuser")
}
jsuser.greetingtwo = function (){
    console.log(`hello jsuser , ${this.name}`)
}

console.log(jsuser.greeting())
console.log(jsuser.greetingtwo())