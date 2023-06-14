import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../Images/cyan-logo.png'

function Navbar() {
    return (
        <div>
            <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" href="/"><img src={logo} style={{height:"42px", width:"85px"}} alt="" /></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{}}>
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/products">Products</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Link
                                </NavLink>
                                <ul className="dropdown-menu">
                                    <li><NavLink className="dropdown-item" href="/">Action</NavLink></li>
                                    <li><NavLink className="dropdown-item" href="/">Another action</NavLink></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><NavLink className="dropdown-item" href="/">Something else here</NavLink></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link disabled">Link</NavLink>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav >
        </div>

    )
}

export default Navbar
