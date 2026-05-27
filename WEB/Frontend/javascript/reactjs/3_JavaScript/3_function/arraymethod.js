const nums = [1, 2, 3];

const doubled = nums.map(n => n * 2);//map
// [2, 4, 6]

const even = nums.filter(n => n % 2 === 0);//filter
const sum = nums.reduce((acc, curr) => acc + curr, 0);//reduce

//find
const users = [
  { id: 1 },
  { id: 2 }
];

const user = users.find(u => u.id === 2);
// { id: 2 }

nums.some(n => n > 2);   // true
nums.every(n => n > 0);  // true

//spread
const arr = [1, 2, 3];
const newArr = [...arr, 4];
// [1,2,3,4]

arr.slice(1,3);  // [2,3]  ✅ no change
arr.splice(1,2); // modifies array ❌

arr.forEach(n => console.log(n));