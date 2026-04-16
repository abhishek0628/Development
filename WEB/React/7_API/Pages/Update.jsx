import axios from "axios"
import {useState} from "react";
function Update(){
    const [form,updateForm]=useState({
        name:"",
        email:""
    })
    const handleSubmit=async()=>{
        try{
            const res=await axios.put("http://localhost:8001/update/api",form);
            console.log(res.data);
            alert("updated")

        }catch(err){
            console.log(err);
        }
    }
    return(
                <div>
            <input
                placeholder="name"
                value={form.name}
                onChange={(e) =>
                    updateForm(prev => ({ ...prev, name: e.target.value }))
                }
            /><br />

            <input
                placeholder="email"
                value={form.email}
                onChange={(e) =>
                    updateForm(prev => ({ ...prev, email: e.target.value }))
                }
            />

            <button onClick={handleSubmit}>Update</button>
        </div>

    )
}
export default Update;