import React, { useState } from 'react'

const View = () => {
   
  return (
    <div>
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
        <th scope="row">{value.name}</th>
        <td>{value.bg}</td>
        <td>{value.gen}</td>
        <td>{value.add}</td>
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