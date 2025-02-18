const myobject = {
    js : 'javascript',
    cpp : 'c++',
    rb : 'ruby',
    swift : 'swift in apple'
}
for (const key in myobject) {
    console.log(`${key} and ${myobject[key]}`);  
}
