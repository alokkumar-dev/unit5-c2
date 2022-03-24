import axios from "axios";
import { useEffect, useState } from "react";
import "./Rentals.css";

export const Rentals = () => {
    const [show,setShow] =useState([])
    const [so,setSo] =useState([])

    const getData =()=>{
      axios.get("http://localhost:8080/houses").then((res)=>{
        setShow([...res.data])
      })
    }
    useEffect(()=>{
      getData()
      // handleRent()
    },[])
    function rentHigh(){
    let arr = show.sort((a,b)=> Number(b.areaCode) - Number(a.areaCode))
     console.log(arr)
     setSo(arr)
    }
    function rentLow(){
      let arr = show.sort((a,b)=> Number(a.areaCode) - Number(b.areaCode))
      console.log(arr)
      setSo(arr)
    }
    // export getData
  return (
    <div className="rentalContainer">
      <div className="sortingButtons">
        <button className="sortById">Sort by ID</button>
        <button className="sortByRentAsc">Rent Low to high</button>
        <button className="sortByRentDesc" onClick={rentHigh}>Rent High to low</button>
        <button className="sortByAreaAsc" onClick={rentLow}>Area Low to high</button>
        <button className="sortByAreaDesc">Area High to Low</button>
      </div>
      <input
        className="searchAddress"
        type="text"
        placeholder="Search Address"
      />
      <table className="table" border="1">
        <thead>
          <tr>
            <th>Sl.no.</th>
            <th>Name</th>
            <th>Owner Name</th>
            <th>Address</th>
            <th>Area Code</th>
            <th>Rent</th>
            <th>Available For</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {show.map((house, index) => {
            return (
              <tr key={house.id} className="houseDetails">
                <td className="houseId">{house.id}</td>
                <td className="houseName">{house.name} </td>
                <td className="ownersName">{house.ownerName}</td>
                <td className="address">{house.address}</td>
                <td className="areaCode">{house.areaCode}</td>
                <td className="rent">{house.rent}</td>
                <td className="preferredTenants">
                  {/* Show text Both or Bachelors or Married based on values */}
                  {house.married ? "married":"batchelor"}
                </td>
                <td className="houseImage">
                  <img src={house.image} alt="house" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};