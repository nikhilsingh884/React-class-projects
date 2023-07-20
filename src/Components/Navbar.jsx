import React, { useContext } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import logo from "../Images/purpleLogo.png"
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../Redux/authSlice';
import '../Home'
import { AppDetails } from '../App';


function Navbar() {
    const navigate = useNavigate();
    const data = useLocation();
    const dispatch = useDispatch();
    const { drinksCart } = useContext(AppDetails);
    const { mobilesCart } = useContext(AppDetails);
    const { productCart } = useContext(AppDetails);

    const cartLength = (drinksCart.length + mobilesCart.length + productCart.length)


    const { isLogin } = useSelector((state) => state.auth)

    if (data.pathname === '/login' || data.pathname === '/signup') {
        return null
    }

    return (
        <div>
            <div>
                <nav id='navbar' className="navbar navbar-expand-lg bg-body-light fixed-top m-0">

                    <div className="container-fluid  py-1   ">
                        <div className='d-flex justify-content-around align-items-center'>
                            <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className='logo' onClick={() => (navigate("/"))}> <img className='' src={logo} style={{ height: "50px", width: "98px" }} alt="" /></div>
                        </div>

                        <div className='d-flex justify-content-between align-items-center'>
                            <div className=' cart-icon' onClick={() => navigate("/cart")}>
                                <span style={{ color: "rgb(53, 2, 109)" }} className='fa-solid fa-cart-shopping fa-lg '></span>

                                <div className="cart-badge-mobile rounded-5 bg-primary text-light d-flex justify-content-center align-items-center ">{cartLength}</div>
                                <div>
                                </div>
                            </div>

                            <div>
                                <div className='mobileloginBtn text-end'>
                                    {
                                        isLogin ? <button className='btn btn-primary btn-sm  ' onClick={() => (dispatch(logout()))}>Logout </button> : <button className='btn btn-outline' onClick={() => { navigate('/login') }}>Log in</button>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="collapse navbar-collapse " id="navbarNav">
                            <div className='mobilesearchbar'>
                                <input className='form-control rounded-1 border-dark' placeholder='search products' type="text" />
                            </div>
                            <ul className="navbar-nav">
                                <li className="nav-item text-center">
                                    <NavLink className="nav-link" activeClassName="active" to="/Cocktail"> Drinks </NavLink>
                                </li>
                                <hr className='my-0' />
                                <li className="nav-item text-center">
                                    <NavLink className="nav-link" activeClassName="active" to="/Mobiles">Mobiles & Laptops</NavLink>
                                </li>
                                <hr className='my-0' />

                                <li className="nav-item text-center">
                                    <NavLink className="nav-link" activeClassName="active" to="/Product">Clothing</NavLink>
                                </li>

                                <hr className='my-0' />

                                <li className="nav-item text-center">
                                    <NavLink className="nav-link " activeClassName="active" to="/inventory">Admin Inventory</NavLink>
                                </li>
                                <hr className='my-0' />
                                <li className="nav-item text-center">
                                    <NavLink className="nav-link " activeClassName="active" to="/about">About</NavLink>
                                </li>
                                <hr className='my-0' />
                                <li className="nav-item text-center">
                                    <NavLink className="nav-link" activeClassName="active" to="/contactUs">Contact us</NavLink>
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
                                    <div><a href="https://www.instagram.com/_niksin/"> <span class="fa-brands fa-instagram"
                                        target="blank"></span></a></div>
                                </div>
                            </div>

                        </div>

                        <div className=' cart-icon-web me-4' onClick={() => navigate("/cart")}>
                            <span style={{ color: "rgb(53, 2, 109)" }} className='fa-solid fa-cart-shopping fa-lg '></span>

                            <div className="cart-badge-web rounded-5 bg-primary text-light d-flex justify-content-center align-items-center "> {cartLength}</div>
                            <div>
                            </div>
                        </div>

                        <div className='loginBtn'>
                            {
                                isLogin ? <button className='btn btn-outline p-0 pe-2' onClick={() => (dispatch(logout()))}>Logout</button> : <button className='btn btn-outline p-0 pe-2' onClick={() => { navigate('/login') }}>Log in</button>
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
