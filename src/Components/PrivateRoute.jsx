import React, { useContext } from 'react'
import { AppDetails } from '../App'
import Container from './Container';
import Loginbutton from './Loginbutton';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {

    const { login, setLogin } = useContext(AppDetails);

    if (login) {

        return children
    }
    return (
        <Navigate to="/login"/>
    )
}

export default PrivateRoute
