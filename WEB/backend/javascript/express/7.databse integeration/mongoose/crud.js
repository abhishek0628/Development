const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/TestDB")
.then(()=>console.log("Db is connected"))
.catch(err=>console.log(err))
const UserSchema=new mongoose.Schema({
    name:{Type:String},
    email:{Type:String},
    password:{Type:String}
});
const User=mongoose.model("users",userSchema);

// create
async function createuser(){
    const user=await User.create({
        name:"alex",
        email:"alex123@gmail.com",
        password:"alex098"
    })
}
createuser()
// OR
async function createuser2(){
    const user=new User({
        name:"bob",
        email:"bob123@gmail.com",
        password:"bob1234"
    })
    await user.save()
}

// fetch user
async function fetchuser(){
    const users=await User.find();
    return user;
}

async function fetchuser1(){
    const user1=await User.findOne(
        {email:"bob123@gmail.com"}
    )
    return user1
}
async function fetchuser2(){
    const user2=await User.findById("jkkskk98290029");
    return user2;
}

// update 
async function updateuser(email){
    const user=await User.updateOne(
        {email:email},
        {$set:
            {name:"alex"}
        }
    )
}
async function updateuser2(){
    const user2=await User.updateMany(
        {},
        {
            $set:{
                active:false
            }
        }
    )
}
async function updateuser3(id){
    const user3=await User.findByIdAndUpdate(
        id,
        {
            name:"updated name"
        },
        {
            new:true
        }
    )
}

//delete
async function deleteuser(email){
    const user=await deleteOne({email:email})
    return user
}
async function deleteuser1(id){
    const user1=await findByIdAndDelete(id)
    return user1
}
