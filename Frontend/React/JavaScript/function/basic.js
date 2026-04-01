function add(a,b){
    return a+b;
}
console.log(add(2,3))

//with deafualt parameter
function greet(name=`alex`){
    return `hello ${name}`
}
const s=greet()
console.log(s)