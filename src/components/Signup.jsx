import axios from 'axios'
import React, { useState } from 'react'

const Signup = () => {
    const [data,setdata]=useState({
    "name":"",
    "emailid":"",
    "phno":"",
    "gender":"",
    "pass":"",
    "cpass":""
    })

    const inputhandler = (event)=>{
        setdata({...data,[event.target.name]:event.target.value})
    }

    const readValue = ()=>{
        axios.post("http://localhost:8805/signup",data).then(
            (response)=>{
                if(response.data.status=="SIGNUP"){
                    alert("SIGNED UP")
                }
                else{
                    alert("ATTEMPT FAILED !!")
                }
            }
        )
    }
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label"><b>NAME</b></label>
                            <input type="text" className="form-control" name='name' value={data.name} onChange={inputhandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label"><b>EMAIL ID</b></label>
                            <input type="text" className="form-control" name='emailid' value={data.emailid} onChange={inputhandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label"><b>PHONE NUMBER</b></label>
                            <input type="text" className="form-control" name='phno' value={data.phno} onChange={inputhandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label"><b>GENDER</b></label>
                            <select name="gender" value={data.gender} onChange={inputhandler} id="" className="form-control">
                                <option value="MALE">MALE</option>
                                <option value="FEMALE">FEMALE</option>
                                <option value="OTHERS">OTHERS</option>
                            </select>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label"><b>
                                PASSWORD</b></label>
                                <input type="password" name="pass" value={data.pass} onChange={inputhandler} id="" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label"><b>CONFIRM PASSWORD</b></label>
                            <input type="password" name="cpass" value={data.cpass} onChange={inputhandler} id="" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-primary" onClick={readValue}>REGISTER</button>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success">BACK TO LOGIN</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup