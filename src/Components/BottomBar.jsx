import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AppDetails } from '../App';

function BottomBar() {
  const navigate = useNavigate();

  const { cart } = useContext(AppDetails)
  return (
    <div>
      <div className="whatsapp-main">
        <div className="whatsapp-order px-4  d-flex justify-content-between align-items-center text-center">


          <div className='bottom-icon p-3  rounded-1' onClick={() => navigate("/")}> <span className='fa-solid fa-house fa-lg '></span><div><p className='mb-0 text-dark mt-1'>Home</p></div></div>

          <div className='bottom-icon p-3  rounded-1' onClick={() => navigate("/")}> <span className='fa-solid fa-search fa-lg '></span><div><p className='mb-0 text-dark mt-1'>Search</p></div></div>

          <div className='bottom-icon p-3  rounded-1' onClick={() => navigate("/cocktail")}><span className='fa-solid fa-wine-glass fa-lg '></span><div><p className='mb-0 text-dark mt-1'>Drinks</p></div></div>

          <div className='bottom-icon p-3  rounded-1' onClick={() => navigate("/mobiles")}><span className='fa-solid fa-mobile-screen fa-lg '></span><div><p className='mb-0 text-dark mt-1'>Mobiles</p></div></div>

          <div className='bottom-icon p-3  rounded-1' onClick={() => navigate("product")}> <span className='fa-solid fa-shirt fa-lg '></span><div><p className='mb-0 text-dark mt-1'>Clothing</p></div></div>



          {/* <div className='bottom-icon cart-icon p-3  rounded-1' onClick={() => navigate("/cart")}> <span className='fa-solid fa-cart-shopping fa-lg '></span> <span><div className="cart-badge rounded-5 bg-dark text-light d-flex justify-content-center align-items-center ">{cart.length}</div></span><div><p className='mb-0 text-dark mt-1'>Cart</p></div></div> */}
        </div>
      </div>

    </div>
  )
}

export default BottomBar
