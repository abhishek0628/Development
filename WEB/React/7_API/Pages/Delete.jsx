// import {useState} from "react";
// import axios from "axios";
// function Delete(){
//     const [form,deleteForm]=useState(
//         {
//         email:""
//         }
//     )
    
//     const handleSubmit=async()=>{
//         try{
//         const res=await axios.delete("http://localhost:8001/delete/api",form)
//         console.log(res.data);
//         alert("submitted");
//         }catch(err){
//             console.log(err);
//         }
//     }
//     return(
//         <div>
//             <input placeholder="email" onChange={(e)=>deleteForm(prev=>({...prev, email:e.target.value}))}/><br></br>
//             <button onClick={handleSubmit}>delete</button>
//         </div>
//     )
// }
// export default Delete;
import { useState } from "react";
import axios from "axios";

function Delete() {
    const [form, setForm] = useState({
        email: ""
    });

    const handleSubmit = async () => {
        try {
            const res = await axios.delete("http://localhost:8001/delete/api", {
                data: form
            });

            console.log(res.data);
            alert("deleted");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <input
                placeholder="email"
                onChange={(e) =>
                    setForm(prev => ({ ...prev, email: e.target.value }))
                }
            />
            <br />

            <button onClick={handleSubmit}>delete</button>
        </div>
    );
}

export default Delete;