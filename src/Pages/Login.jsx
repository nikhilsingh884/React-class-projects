import React from 'react'
import Loginbutton from '../Components/Loginbutton'
import Container from '../Components/Container'

function Login() {
  return (
    <div>
          <Container>
              <div className='w-50 col-md-6 offset-3 border border-2 rounded-4 mt-5 bg-light shadow'>
                  <form action="" className='p-5'>
                      <h1 className='text-center text-primary mb-4'>Login</h1>
                      <div>
                          <input className='form-control mb-2' type="text" placeholder='Enter username' />
                          <input className='form-control mb-5' type="password" placeholder='Enter password' />
                      </div>
                      <div><Loginbutton /></div>
                      <p className='mt-3'><link rel="stylesheet" to="/" /> Forgot password?</p>
                  </form>
              </div>
          </Container>
    </div>
  )
}

export default Login
