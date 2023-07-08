import React from 'react'
import { Navigate } from 'react-router';

function MobilesCard({ item, index }) {


  const { thumbnail, title, description, id } = item;
  return (

    <div className="col-md-3 col-6 mb-5 ">
      <div style={{ cursor: "pointer" }} key={index} className="card  mb-2 shadow rounded-0" >
        <img src={thumbnail} style={{ height: "200px" }} alt="" />
        <div className="card-body text-truncate fw-bold">
          {title}
          <p className='text-truncate' title={description}>{description}</p>
        </div>
        <button className='btn  disabled w-100 rounded-0'>21499/-</button>
      </div>
      <button className='btn btn-primary w-100 rounded-0'>Buy Now</button>
    </div>

  )
}

export default MobilesCard
