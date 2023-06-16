import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import logo from "../Images/cyan-logo.png"

function Navbar() {
    const data = useLocation();
    if (data.pathname === '/login') {
        return null
    }
    return (
        <div>
            <div className="">
                <nav className="navbar navbar-expand-lg bg-body-light">
                    <div className="container-fluid">
                        <NavLink> <img src={logo} style={{height:"40px", width:"80px", marginRight:"30px"}} alt="" /></NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/Cocktail">Cocktails</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/Product">Products</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link ">About</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link " to="/Help">Help</NavLink>
                                </li>
                            </ul>
                            <div>
                                <div><span className=''></span></div>
                                <input className='me-2 form-control border border-2 rounded-5' placeholder='search products' type="text" />
                            </div>
                        </div>
                    </div>
                </nav>

            </div>
        </div>
    )
}

export default Navbar
