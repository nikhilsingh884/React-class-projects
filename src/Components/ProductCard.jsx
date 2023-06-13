import React from 'react'
import { useNavigate } from 'react-router-dom';

function ProductCard({item}) {
  const navigate = useNavigate();

    const{id, title,price, image, description}=item

  return (
    <div className="col-md-3 mb-5" >
      <div className="card" onClick={() => navigate(`/cocktail/${id}`)} style={{ cursor: "pointer" }}>
        <img style={{height:"150px", width:"150px"}} src={image} className="w-100" alt="" />
        <div className="card-body p-2">
          <h6 className="m-0 text-truncate">{title}</h6>
          <p className="m-0 text-secondary text-truncate" style={{ fontSize: "12px" }}>
            {description}
          </p>
        </div>
        <div className="card-footer px-1 d-flex justify-content-between">
          <div className="btn btn-danger btn-sm">View more</div>
          <div className="btn btn-primary btn-sm">Add to cart</div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
