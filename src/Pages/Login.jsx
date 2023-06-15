import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {

    const navigate= useNavigate()
  return (
    <div>
          <div className='container py-5'>
              <div className="back-btn mb-3" style={{cursor:"pointer"}} onClick={() => navigate("/")}> <span className='fa-solid fa-angle-left'></span>&nbsp; Back </div>
              <div className="row">

                  <div className="col-md-4 offset-4 rounded-3 border border-3 shadow p-5 bg-light">
                      
                      <h2 className='text-center mb-5'>Login</h2>
                      <input type="email" placeholder='Enter email' className='form-control mb-4' />
                      <input type="password" placeholder='Enter password' className='form-control mb-4' />
                      <hr />
                      <button className='btn btn-primary w-100 mb-3' >Login</button>
                      <Link to="/help"> <p className='my-0'>Forgot password?</p></Link>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Login
