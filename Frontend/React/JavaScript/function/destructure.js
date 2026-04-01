const user={
    name:"alex",
    roll:2,
    age:30,
    country:"america"
}
const{name,age}=user;
const{roll:rollno}=user;//changing variable name
console.log(rollno);
const{country="canada"}=user;//default value
console.log(country)

//Array Destructuring
const nums=[1,2,3,4]
const [a,b]=nums;
const[c,,,e]=nums//skip value
console.log(e);

const users={
    name1:"alice",
    address:{
        city:"toronto"
    }
}
const {name1,address:{city}}=users
console.log(city)
console.log(name1)