// object singleton 

const tinderuser = new Object()
// const tinderuser = {}
tinderuser.id = "123abc"
tinderuser.name = "ayush"
tinderuser.isloggedin = "false"
// console.log(tinderuser);

const regularuser = {
    email : "some@yahoo.com",
    fullname : {
        userfirstname : "aysuh",
        userlastname : "gautam"
    }
}
// console.log(regularuser.fullname.userfirstname);

const obj1 = {
    1 : "a",
    2: "b"
}
const obj2 = {
    3 : "c",
    4 : "d"
}
const obj4 = {
    5: "e",
    6 : "f"
}
//const obj3 = { obj1 + obj2 }
//const obj3 = Object.assign({},obj1,obj2,obj4)
const obj3 = {...obj1,...obj2,...obj4}   // spread 
//console.log(obj3);


const user = [
    {
        id : "1",
        email : "arunsinghcreator@gmail.com"
    },
    {
        id : "1",
        email : "arunsinghcreator@gmail.com"
    },
    {
        id : "1",
        email : "arunsinghcreator@gmail.com"
    },
]

//console.log(user[1].email)

console.log(tinderuser);

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser))
console.log(Object.entries(tinderuser))

console.log(tinderuser.hasOwnProperty("isloggedout"))

const course = {
    coursename : "tech",
    courseprice : "1",
    courseteacher : "ayush"
}
//console.log(course.teacher)

const {courseteacher : teacher} = course
const {coursename : name } = course
// console.log(teacher);
// console.log(name);




// react 
// const navbar = ({company}) => {

// 

// navbar(company = "ritesh" )