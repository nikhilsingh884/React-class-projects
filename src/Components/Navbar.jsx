import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <div className="">
                <nav className="navbar navbar-expand-lg bg-body-dark">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand" href="#">Navbar</NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
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
                            </ul>
                        </div>
                    </div>
                </nav>

            </div>
        </div>
    )
}

export default Navbar
