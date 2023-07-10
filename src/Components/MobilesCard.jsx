import React, { useContext, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { AppDetails } from '../App';

function MobilesCard({ item, index }) {
  const { cart, setCart } = useContext(AppDetails)
  const addBtn = useRef()


  const navigate= useNavigate();

  const { thumbnail, title, description, id } = item;

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
  }

  return (

    <div className="col-md-2 col-6 mb-5 ">
      <div style={{ cursor: "pointer" }} key={index} className="card  mb-2 shadow rounded-0" onClick={()=>navigate(`/mobiles/${id}`)} >
        <img src={thumbnail} style={{ height: "200px" }} alt="" />
        <div className="card-body text-truncate fw-bold">
          {title}
          <p className='text-truncate' title={description}>{description}</p>
        </div>
        <button className='btn  disabled w-100 rounded-0'>21499/-</button>
      </div>
      <button className='btn btn-primary w-100 rounded-0' ref={addBtn} onClick={() => addToCart(item)}>Add to cart</button>
    </div>

  )
}

export default MobilesCard
