import React from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import logo from "../Images/cyan-logo.png"
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../Redux/authSlice';


function Navbar() {
    const navigate=useNavigate();
    const data = useLocation();
    const dispatch= useDispatch();
    const{isLogin} =useSelector((state)=>state.auth)

    if (data.pathname === '/login') {
        return null
    }
    return (
        <div>
            <div className="">
                <nav className="navbar navbar-expand-lg bg-body-light  fixed-top ">
                    <div className="container-fluid  ">
                        <div> <img src={logo} style={{ height: "40px", width: "80px", marginRight: "30px" }} alt="" /></div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse " id="navbarNav">
                            <div className='mobilesearchbar'>
                                <input className='mx-2 form-control border border-0 rounded-5' placeholder='search products' type="text" />
                            </div>
                            <ul className="navbar-nav bg-danger nav-items">
                                <li className="nav-item">
                                    <NavLink className="nav-link active" aria-current="page" to="/"><div className='text-center'><span className="fa-solid fa-house"></span></div>  </NavLink>
                                </li> 
                                <hr className='my-0 bg-danger' />
                                <li className="nav-item text-center">
                                    <NavLink className="nav-link" to="/Cocktail"> Cocktails </NavLink>
                                </li> 
                                <hr className='my-0 bg-danger' />
                                <li className="nav-item text-center">
                                    <NavLink className="nav-link" to="/Product">Products</NavLink>
                                </li> 
                                <hr className='my-0 bg-danger' />
                                <li className="nav-item text-center">
                                    <NavLink className="nav-link ">About</NavLink>
                                </li> 
                                <hr className='my-0 bg-danger' />
                                <li className="nav-item text-center">
                                    <NavLink className="nav-link " to="/Help">Help</NavLink>
                                </li>
                                <li>
                                <div className='mobileloginBtn'>
                                    {
                                        isLogin ? <button className='btn btn-outline' onClick={() => (dispatch(logout()))}>Logout &nbsp;<i class="fa-regular fa-user"></i></button> : <button className='btn btn-outline' onClick={() => { navigate('/login') }}>Login&nbsp;<i class="fa-regular fa-user"></i></button>
                                    }
                                    </div></li>
                            </ul>
                        </div>
                        <div className='loginBtn'>
                            {
                                isLogin ? <button className='btn btn-outline' onClick={() => (dispatch(logout()))}>Logout &nbsp;<i class="fa-regular fa-user"></i></button> : <button className='btn btn-outline' onClick={() => { navigate('/login') }}>Login&nbsp;<i class="fa-regular fa-user"></i></button>
                            }
                        </div>
                        <div className='searchbar'>
                            <input className='mx-2 form-control border border-0 rounded-5' placeholder='search products' type="text" />
                        </div>
                    </div>
                </nav>

            </div>
        </div>
    )
}

export default Navbar
