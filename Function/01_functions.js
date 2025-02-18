function saymyname(){
    console.log("A")
    console.log("Y")
    console.log("U")
    console.log("S")
    console.log("H")
}
//saymyname()

// function addtwonumbers(number1,number2){
//     console.log(number1 + number2)
// }
// addtwonumbers(3,6)

// const result = addtwonumbers(5,9)
// console.log("Result",result);


function addtwonumbers(number1,number2){
    //  let result = number1 + number2
    //  return result

    return number1+number2
}

const result = addtwonumbers(5,9)
// console.log("Result:",result);


function loginusermessage(username = "Sam"){
    if(username == undefined){            //!username
        console.log("please enter a user")
        return
    }
    return `${username} just logged in`
}
//console.log(loginusermessage("ayush"));
//console.log(loginusermessage());


function calculatorcartprice(val1,val2,...num1){
    return num1
}
//console.log(calculatorcartprice(2,3,4,5,6));

const user = {
    username : "ayush",
    price : 199
}
function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}
//handleobject(user)
/*handleobject({
    username : "isha",
    price : 299
})
*/

const mynewarray = [200,400,300,500]
function returnsecondvalue(getarray){
    return getarray[1]
}
console.log(returnsecondvalue(mynewarray))