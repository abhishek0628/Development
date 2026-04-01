const add=(a,b)=>a+b;
console.log(add(4,5))

const square=x=>x*x;
const greet=name=>`hello ${name}`
const user={
    name:"Alex",
    greet:function(){
        console.log(this.name)
    }
}

const Button = () => {
  const handleClick = () => {
    console.log("Clicked");
  };

  return <button onClick={handleClick}>Click</button>;
};
fetch("/api/users")
  .then(res => res.json())
  .then(data => console.log(data));

async function getData() {
  const res = await fetch("/api/users");
  const data = await res.json();
  console.log(data);
}