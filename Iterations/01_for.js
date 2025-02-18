// for 

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (element == 5) {
//         console.log("5 is best number")
//     }
//     console.log(element);    
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(`Table for ${i}`);
//     for (let j = 1; j <= 10; j++) {
//         //console.log(`inner loop ${j} and outer loop ${i}`);
//         console.log(i + '*' + j + '=' + i*j);
//     }  
// }

// let myarray = ["flash","batman","superman"]
// for (let index = 0; index < myarray.length; index++) {
//     const element = myarray[index];
//     console.log(element);    
// }

// break and continue 
// for (let index = 1; index <= 20; index++) {
//     const element = index;
//     if (element == 5) {
//         console.log('detected 5');
//         break
//     }
//     console.log(element);
    
// }
for (let index = 1; index <= 20; index++) {
    const element = index;
    if (element == 5) {
        console.log('detected 5');
        continue
    }
    console.log(element);
}
