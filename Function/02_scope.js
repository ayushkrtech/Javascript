//var c = 300

let a = 300


if (true){
    let a = 10
    const b = 20
    //console.log("inner",a);
    
}


//console.log(a);
//console.log(b);
//console.log(c);

function one(){
    const username ="ayush"

    function two(){
        const web ="youtube"
        console.log(username);
    }
    //console.log(web)
    two()
}
//one()

if (true){
    const username = "hitesh"
    if (username === "hitesh"){
        const web = " youtube"
        //console.log(username + web)
    }
    //console.log(username)
}

// ************* interesting ************

console.log(addone(5))
function addone(num){
    return num + 1
}
// addone(5)


// addtwo(5)
const addtwo = function(num){
    return num + 2
}
// addtwo(5)