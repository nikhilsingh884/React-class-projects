// import React, { useRef } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import logo from "../Images/cyan-logo.png"
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../Redux/authSlice';
import '../Home.js'



function Navbar() {
    const navigate = useNavigate();
    const data = useLocation();
    const dispatch = useDispatch();
    const { isLogin } = useSelector((state) => state.auth)

    // const navRef=useRef(null);

    // const collapsedNav=()=>{
    //     navRef.current.classlist.add('collapsed')
    // }

    if (data.pathname === '/login' || data.pathname === '/signup') {
        return null
    }

    

    return (
        <div>
            <div>
                {/* <section className="header-social">
                    <div className="nav-sub pt-0 d-flex justify-content-between align-items-center">
                        <div className="contacts ">
                            <div>
                                <i className="text-light fa-sharp fa-solid fa-phone">&nbsp; </i>+919924768290
                            </div>
                            <div>
                                <i className="fa-sharp fa-solid fa-envelope">&nbsp;</i>nikhilsingh884@outlook.com
                            </div>
                        </div>
                        <div className="socials">
                            <a href="www.facebook.com"> <i className="fa-brands fa-facebook"></i></a>
                            <a href="www.instagram.com"> <i className="fa-brands fa-instagram"></i></a>
                        </div>
                    </div>
                </section> */}
                <nav id='navbar' className="navbar navbar-expand-lg bg-body-light fixed-top  ">

                    <div className="container-fluid  py-2   ">

                        <button className="navbar-toggler nav-icon " type="button"data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className='logo' onClick={() => (navigate("/"))}> <img src={logo} style={{ height: "35px", width: "70px" }} alt="" /></div>

                        <div><div className='mobileloginBtn text-end'>
                            {
                                isLogin ? <button className='btn btn-outline ' onClick={() => (dispatch(logout()))}>Logout </button> : <button className='btn btn-outline' onClick={() => { navigate('/login') }}>Sign in</button>
                            }
                        </div></div>
                        <div className="collapse navbar-collapse " id="navbarNav">
                            <div  className='mobilesearchbar'>
                                <input className='form-control rounded-1 border-dark' placeholder='search products' type="text" />
                            </div>
                            <ul className="navbar-nav px-1">
                                <li  className="nav-item text-center">
                                    <NavLink className="nav-link" to="/Mobiles">Mobiles & Laptops</NavLink>
                                </li>
                                <hr className='my-0' />

                                <li  className="nav-item text-center">
                                    <NavLink className="nav-link" to="/Product">Clothing</NavLink>
                                </li>

                                <hr className='my-0' />
                                <li  className="nav-item text-center">
                                    <NavLink className="nav-link" to="/Cocktail"> Drinks </NavLink>
                                </li>
                                <hr className='my-0' />

                                <li  className="nav-item text-center">
                                    <NavLink className="nav-link " to="/inventory">Admin Inventory</NavLink>
                                </li>
                                <hr className='my-0' />
                                <li  className="nav-item text-center">
                                    <NavLink className="nav-link " to="/about">About</NavLink>
                                </li>
                                <hr className='my-0' />
                                <li  className="nav-item text-center">
                                    <NavLink className="nav-link " to="/Help">Help</NavLink>
                                </li>
                                <hr className='my-0 ham-hr' />


                            </ul>

                            <div className=''>
                                <div class="ham-social pt-4  px-5  fs-3">
                                    <div><a href="https://www.facebook.com/nikhilsingh884/" target="blank"> <span
                                        class="fa-brands fa-facebook"></span></a></div>
                                    <div><a href="http://wa.me/+919924768290"> <span class="fa-brands fa-whatsapp"
                                        target="blank"></span></a></div>
                                    <div><a href="https://www.youtube.com/@bullswalktradingacademy/featured" target="blank"> <span
                                        class="fa-brands fa-youtube"></span></a></div>
                                    <div><a style={{ marginRight: "" }} href="https://www.instagram.com/_niksin/"> <span class="fa-brands fa-instagram"
                                        target="blank"></span></a></div>
                                </div>
                            </div>

                        </div>

                        <div className='loginBtn'>
                            {
                                isLogin ? <button className='btn btn-outline p-0 pe-2' onClick={() => (dispatch(logout()))}>Logout</button> : <button className='btn btn-outline p-0 pe-2' onClick={() => { navigate('/login') }}>Sign in</button>
                            }
                        </div>

                        <div className='searchbar'>
                            <input className=' form-control border border-1 rounded-1 border-dark  px-2' placeholder='search' type="text" />
                        </div>
                    </div>
                </nav>

            </div>
        </div>
    )
}

export default Navbar
