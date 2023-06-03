import React, { useContext } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logoImg from "../Images/cyan-logo.png"
import Loginbutton from './Loginbutton'
import { AppDetails } from '../App'



function Navbar() {
  const { login, setLogin, cart } = useContext(AppDetails)
  const location= useLocation();

  function logOut() {
    setLogin(false);
    localStorage.removeItem("login");
  }

  const cartLength = cart.length;

  if (location.pathname==="/login"){
  return null;
  }


  return (
    <div>
      <nav className="navbar navbar-expand-lg text-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand me-5"><img
            src={logoImg}
            alt=""
            style={{ height: "40px", width: "90px" }}
          /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-center ">

              <li className="nav-item text-light">
                <NavLink to="/" className="nav-link active" aria-current="page">Home</NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/Courses" className="nav-link">Courses</NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/Fakestore" className="nav-link">Accessories</NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/Cocktail" className="nav-link">Cocktails</NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/electronics" className="nav-link">Electronics</NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/Support" className="nav-link">Support</NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/About" className="nav-link">About</NavLink>
              </li>

            </ul>
            <div className="d-flex justify-content-between align-items-center">

              <Link to="/Cart"> <div className=' d-flex align-items-center' style={{ position: "relative" }}>
                <span
                  style={{ marginRight: "30px", position: "relative" }}
                  className="fa-solid fa-light fa-cart-shopping position-relative"
                ></span>
                <span  style={{fontSize:"10px"}} class="position-absolute translate-middle badge  rounded-pill bg-light  text-dark">
                  {cartLength}
                  <span class="visually-hidden">unread messages</span>
                </span>
              </div>
              </Link>
              <form className="d-flex" role="search ">
                <input className="form-control me-2 rounded-5 search" type="search" placeholder="Search" aria-label="Search" />
              </form>
              {login ? (
                <div className="logoutBtn">
                  <button className="btn btn-sm btn-dark w-100" onClick={logOut}>
                    Logout
                  </button>
                </div>
              ) : (
                <Loginbutton />
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>

  )
}

export default Navbar
