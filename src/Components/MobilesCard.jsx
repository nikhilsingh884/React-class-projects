import React from 'react'
import { Navigate } from 'react-router';

function MobilesCard({item,index}) {
    const { thumbnail, title, description, id } = item;
  return (
    <div>
          <div className="col-md-3 col-6 mb-4 ">
              <div style={{ cursor: "pointer" }} key={index} className="card phones-card mb-4 shadow" >
                  <img src={thumbnail} style={{ height: "200px" }} alt="" />
          <div className="card-body text-truncate fw-bold">
                      {title}
                      <p className='text-truncate' title={description}>{description}</p>
                      <button className='btn btn-dark'>Buy Now</button>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default MobilesCard
