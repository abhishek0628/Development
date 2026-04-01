//let
let age=20;
console.log(age)
age=21;
console.log(age)
//let preserves the value per iteration
for(let i=0;i<=3;i++){
    setTimeout(()=>console.log(i),100)
}
//output:0 1 2 3