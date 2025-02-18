// primitive

/*
7 types : string , number  , boolean , null , undefined , symbol , bigint  
*/

const score = false
const scorevalue = 100.3
const isloggedin = false
const outsidetemp = null
let emailuser;
const id = Symbol('789')
const anotherid = Symbol('789')

// console.log(id == anotherid);

const bignumber = 2151582658158415481548n


// reference type (non primitive)

/*
array , objects , function 
*/


const hero = ["ayush", "harsh", "dev"]
let obj = {
    name: "hitesh",
    age: 22,
    city: "kanpur"
}

const myfunction = function () {
    console.log("hello world")
}
// console.log(typeof emailuser);



// ****************************

// stack (primitive) , heap (non-primitive)
let myyoutubename = "ayushgautam.com"
let anothername = myyoutubename
anothername = "arunsingh"

let user = {
    email: "ayushgautam@gmail.com",
    upiid: "user@oksbi",
    mobileno: "23456789"
}

let user2 = user
user2.email = "isha@gmail.com"
console.log(user2);
