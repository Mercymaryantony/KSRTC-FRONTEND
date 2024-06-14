import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const View = () => {
  const[data,changedata]=useState([])
  const fetchdata = ()=>{
     axios.post("http://localhost:8805/view",data).then(
      (response)=>{
          changedata(response.data)
      }
     ).catch(
      (error)=>{
          console.log(error.message)
          alert(error.message)
      }
     ).finally()
     console.log(data)
  }
  useEffect(()=>{fetchdata()},[])
  return (
    <div>
      <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xxl-12">
                <table class="table">
  <thead>
    <tr>
      <th scope="col">BUS NAME</th>
      <th scope="col">BUS NUMBER</th>
      <th scope="col">DRIVER NAME</th>
      <th scope="col">ROUTE</th>
    </tr>
  </thead>
  <tbody>
   {data.map(
    (value,i)=>{
         return <tr>
        <th scope="row">{value.bname}</th>
        <td>{value.bno}</td>
        <td>{value.drivername}</td>
        <td>{value.route}</td>
      </tr>
    }
   )}
  </tbody>
</table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default View