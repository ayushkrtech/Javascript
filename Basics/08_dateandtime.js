let mydate = new Date()
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleString());
// console.log(mydate.toISOString());
// console.log(typeof mydate);

//let mynewcreatedate = new Date(2023,0,20,5,3)
let mynewcreatedate = new Date("2023-01-29")
// console.log(mynewcreatedate.toLocaleString());

let mytimestamp = Date.now()

// console.log(mynewcreatedate.getTime());
// console.log(Math.floor(Date.now()/1000));


let newdate = new Date()
// console.log(newdate.getMonth);

console.log(newdate.toLocaleString('default',{
    weekday: "long",
}))