import React, { useContext, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { AppDetails } from '../App';

function MobilesCard({ item, index }) {
  const { mobilesCart, setMobilesCart } = useContext(AppDetails)
  const addBtn = useRef()


  const navigate= useNavigate();

  const { thumbnail, title, description, id } = item;

  function addToCart(item) {  
      const dataFound = mobilesCart.find((singleItem) => singleItem.id === item.id);

      if (dataFound) {
        alert("Already added in cart..!!");
      } else {
        setMobilesCart([...mobilesCart, item]);
        addBtn.current.style.background = "green";
        addBtn.current.textContent = "Added";
      }
    
  }

  // ========================add to cart after login only==========================

  // function addToCart(item) {
  //   const test = localStorage.getItem("appLogin")
  //   if (test)
  //    {
  //     const dataFound = mobilesCart.find((singleItem) => singleItem.id === item.id);

  //     if (dataFound) {
  //       alert("Already added in cart..!!");
  //     } else {
  //       setMobilesCart([...mobilesCart, item]);
  //       addBtn.current.style.background = "green";
  //       addBtn.current.textContent = "Added";
  //     }
  //   } else {
  //     navigate('/login')
  //   }
  // }

  return (

    <div className="col-md-2 col-6 mb-5 px-sm-1 px-md-2 ">
      <div style={{ cursor: "pointer" }} key={index} className="card  mb-2 shadow rounded-0" onClick={()=>navigate(`/mobiles/${id}`)} >
        <img src={thumbnail} style={{ height: "200px" }} alt="" />
        <div className="card-body text-truncate fw-bold">
          {title}
          <p className='text-truncate' title={description}>{description}</p>
        </div>
        <button className='btn disabled w-100 rounded-0'>21499/-</button>
      </div>
      <button className='btn btn-primary w-100 rounded-0' ref={addBtn} onClick={() => addToCart(item)}> <span className='fa-solid fa-cart-shopping'></span> &nbsp;Add to cart</button>
    </div>

  )
}

export default MobilesCard
