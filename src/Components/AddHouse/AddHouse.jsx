import "./AddHouse.css"
import axios from "axios";
import { useEffect, useState } from "react";

export const AddHouse = () => {

  const [inputData, setInputData] = useState({});
  const [data, setData]= useState([]);
  const handleChange = (e)=>{
    let {className,value, checked, type}= e.target;
    value = type ==="checkbox"?checked:value;
    setInputData({
      ...inputData,
      [className]: value
    })
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    axios.post("http://localhost:8080/houses", inputData).then(()=>{
      alert("Data add successfully");
      setInputData();
    })
  }
  const getData = ()=>{
    axios.get("http://localhost:8080/houses").then((res)=>{
      setData(res.data);
      
    })
  }

  useEffect(()=>{
    getData();
  },[inputData])

  return (
    <div className="addHouseContainer">
      <form onSubmit={handleSubmit}>
        <label>name</label>
        <input type="text" className="name"  onChange={handleChange} required />
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
        <input  type="checkbox" onChange={handleChange} className="bachelor" />
        <br />
        <label>married</label>
        <input  type="checkbox" onChange={handleChange} className="married" />
        <br />
        <label>image</label>
        <input  type="text" className="image" onChange={handleChange} required />
        <br />
        <input className="submitBtn" type="submit" />
      </form>

      <table>
        <thead>
        <tr>
          <th>Name</th>
          <th>Owners name</th>
          <th>Address</th>
          <th>Area code</th>
          <th>rent</th>
          <th>preferred tenants</th>
        </tr>
        </thead>
        <tbody>
          {
            data.map((e)=>{
              return(
                <tr key={e.id}>
                <td>{e.name}</td>
                <td>{e.ownerName}</td>
                <td>{e.address}</td>
                <td>{e.areaCode}</td>
                <td>{e.rent}</td>
                <td>{e.bachelor?"bachelors ":"married" }</td>
              </tr>
              )
              
            })
      }
        </tbody>
      </table>
    </div>
  );
};
