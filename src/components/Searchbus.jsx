import axios from 'axios'
import React, { useState } from 'react'
import Navbar from './Navbar'

const Searchbus = () => {
    const [data,setdata]=useState({
         "bname":""
    })
    const inputhandler = (event) => {
        setdata({ ...data, [event.target.name]: event.target.value })
    }

    const [result,setresult]=useState([])

    const readValue = () => {
        console.log(data)

        axios.post("http://localhost:8805/search", data).then(
            (response) => {
                setresult(response.data)
            }
        ).catch(
            (error) => {
                console.log(error.message)
                alert(error.message)
            }
        ).finally()

    }

    const deletebus = (id)=>{
        let input ={"_id":id}
        axios.post("http://localhost:8805/delete",input).then(
            (response)=>{
                if(response.data.status == "deleted"){
                    alert("DELETED SUCCESSFULLY")
                }
                else{
                    alert("ERROR")
                }
            }
        ).catch().finally()    }

  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-xl-12 col-xl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label"><b>BUS NAME</b></label></div>
                            <input type="text" className="form-control" name='bname' value={data.bname} onChange={inputhandler} />
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">
                                <button className="btn btn-success" onClick={readValue}>SEARCH</button>
                            </label>
                        </div>
                    </div>
                    <div className="row">
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">NAME</th>
                                                <th scope="col">ROUTE</th>
                                                <th scope="col">BUS NO</th>
                                                <th scope="col">DRIVER NAME</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {result.map(
                                                (value, i) => {
                                                    return <tr>
                                                        <th scope="row">{value.bname}</th>
                                                        <td>{value.route}</td>
                                                        <td>{value.bno}</td>
                                                        <td>{value.drivername}</td>
                                                        <td><button className="btn btn-danger" onClick={()=>{deletebus(value._id)}}>DELETE</button></td>
                                                    </tr>
                                                }
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Searchbus