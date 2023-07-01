import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function BottomBar() {
    const { totalItems }= useSelector((state)=>state.cart);
    const navigate = useNavigate();
  return (
    <div>
          <div className="whatsapp-main">
              <div className="whatsapp-order px-5 py-3 d-flex justify-content-between align-items-center text-center">

                  <div className='bottom-icon' onClick={() => navigate("/")}> <span className='fa-solid fa-home fa-lg '></span><div><p className='mb-0 text-dark mt-1'>Home</p></div></div>

                  <div className='bottom-icon' onClick={() => navigate("/mobiles")}><span className='fa-solid fa-search fa-lg '></span><div><p className='mb-0 text-dark mt-1'>Search</p></div></div>

                  <div className='bottom-icon cart-icon' onClick={() => navigate("/cart")}> <span className='fa-solid fa-cart-shopping fa-lg '></span> <span><div className="cart-badge rounded-5 bg-dark text-light d-flex justify-content-center align-items-center ">{totalItems.length}</div></span><div><p className='mb-0 text-dark mt-1'>Cart</p></div></div>

                  <div className='' onClick={() => navigate("/profile")}> <span className='fa-solid fa-user fa-lg '></span><div><p className='mb-0 text-dark mt-1'>MyAccount</p></div></div>
              </div>
          </div>

    </div>
  )
}

export default BottomBar
