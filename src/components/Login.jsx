import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from './Navbar'

const Login = () => {
    const [data,setdata]=useState({
        "emailid":"",
        "pass":""
    })
    const inputhandler = (event)=>{
        setdata({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        axios.post("http://localhost:8805/login",data).then(
            (response)=>{
                if(response.data.status == "success"){
                    sessionStorage.setItem("token",response.data.token)
                    sessionStorage.setItem("userid",response.data.userid)
                    navigate("/dashboard")
                }
                else{
                    alert("FAILED")
                }
            }
        ).catch(
            (error)=>{
                console.log(error.message)
                alert(error.message)
            }
        ).finally()
    }
    let navigate = useNavigate()
  return (
    <div>
       
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label"><b>EMAIL ID</b></label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label"><b>PASSWORD</b></label>
                            <input type="password" name="" id="" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <butoon className="btn btn-primary">LOGIN</butoon>
                        </div>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <h1>CLICK HERE TO<Link to='/signup'><button className="btn btn-success">SIGN UP</button></Link> </h1>
                        </div>
                        
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login