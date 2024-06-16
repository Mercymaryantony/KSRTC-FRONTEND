import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Addbus = () => {
    const [data,setdata]=useState({
        "bname":"",
    "bno":"",
    "drivername":"",
    "route":""
    })
    const inputhandler = (event)=>{
        setdata({...data,[event.target.name]:event.target.value})
    }

    const readValue = ()=>{
        axios.post("http://localhost:8805/addbus",data).then(
            (response)=>{
                if(response.data.status=="ADDED"){
                    alert("ADD")
                }
                else{
                    alert("ATTEMPT FAILED !!")
                }
            }
        )
    }
  return (
    <div>
        <Navbar/>
         <div className="container">
            <br></br>
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label"><b>BUS NAME</b></label>
                            <input type="text" className="form-control" name='bname' value={data.bname} onChange={inputhandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label"><b>BUS NUMBER</b></label>
                            <input type="text" className="form-control"  name='bno' value={data.bno} onChange={inputhandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label"><b>ROUTES</b></label>
                            <input type="text" className="form-control" name='route' value={data.route} onChange={inputhandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label"><b>DRIVER NAME</b></label>
                            <input type="text" className="form-control" name='drivername' value={data.drivername} onChange={inputhandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-primary" onClick={readValue}>ADD</button>
                        </div>   
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Addbus