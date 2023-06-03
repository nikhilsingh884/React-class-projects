import React, { useContext } from 'react'
import { AppDetails } from '../App'
import { useNavigate } from "react-router-dom";




function Loginbutton() {
    const {setLogin } = useContext(AppDetails);
    const navigate = useNavigate();

    function userLogin() {
        setLogin(true);
        localStorage.setItem("login", "true");
        navigate("/");
    }

    return (
        <div className='loginBtn'>
            <button className='btn btn-dark loginBtn btn-sm w-100' onClick={userLogin}>Login</button>
        </div>
    )
}

export default Loginbutton
