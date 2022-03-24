import { useState } from "react";
import axios from "axios"

export const AddHouse = () => {

  const [user,setUser] =useState()

  
     const handleSubmit=(e)=>{
       e.preventDefault()
        
       axios.post("http://localhost:8080/houses",user).then(()=>{

       setUser({})
       })

     }
     const handleChange=(e)=>{
       let {className,value,checked,type} =e.target;
       value =type ==="checked" ? checked:value;
       setUser({...user,[className]:value})
     }

  return (
    <div className="addHouseContainer">
      <form onSubmit={handleSubmit}>
        <label>name</label>
        <input type="text" className="name" onChange={handleChange} required />
        <br />
        <label>ownerName</label>
        <input  type="text" className="ownerName" onChange={handleChange} required />
        <br />
        <label>address</label>
        <input  type="text" className="address" onChange={handleChange} required />
        <br />
        <label>areaCode</label>
        <input  type="text" className="areaCode" onChange={handleChange} required />
        <br />
        <label>rent</label>
        <input  type="text" className="rent" onChange={handleChange} required />
        <br />
        <label>preferredTenant</label>
        <br />
        <label>bachelor</label>
        <input  type="checkbox" className="bachelor" onChange={handleChange} />
        <br />
        <label>married</label>
        <input  type="checkbox" className="married" onChange={handleChange}/>
        <br />
        <label>image</label>
        <input  type="text" className="image" required onChange={handleChange}/>
        <br />
        <input className="submitBtn" type="submit" />
      </form>
    </div>
  );
};