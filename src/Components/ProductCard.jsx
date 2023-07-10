import React, { useContext, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { AppDetails } from '../App';

function ProductCard({ item }) {
  const navigate = useNavigate();

  const { id, title, price, image, description } = item
  const { cart, setCart } = useContext(AppDetails);
  const addBtn = useRef()


  function addToCart(item) {
    const test = localStorage.getItem("appLogin")
    if (test) {
      const dataFound = cart.find((singleItem) => singleItem.id === item.id);

      if (dataFound) {
        alert("Already added in cart..!!");
      } else {
        setCart([...cart, item]);
        addBtn.current.style.background = "green";
        addBtn.current.textContent = "Added";
      }
    } else {
      navigate('/login')
    }
    console.log(item.id);
  }

  return (
    
    <div className="col-md-2 mb-5" >
      <div className="card mb-2 shadow rounded-0" onClick={() => navigate(`/product/${id}`)} style={{ cursor: "pointer" }}>
        <img style={{ height: "150px", width: "150px" }} src={image} className="w-100" alt="" />
        <div className="card-body p-2">
          <h6 className="m-0 text-truncate fw-bold">{title}</h6>
          <p className="m-0 text-secondary text-truncate" style={{ fontSize: "12px" }}>
            {description}
          </p>
        </div>
        <div className="card-footer px-1 d-flex justify-content-between">
          <div className="btn btn-sm btn-light disabled rounded-0 w-100 btn-sm">14999/-</div>
        </div>
      </div>
      <div className="btn btn-sm btn-primary w-100 rounded-0 btn-sm" ref={addBtn} onClick={() => addToCart(item)}>Add to cart</div>
    </div>
  )
}

export default ProductCard
