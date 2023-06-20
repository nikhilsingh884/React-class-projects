import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../Redux/authSlice';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string} from 'yup';
function Login() {

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const { loading, isLogin, errorMsg } = useSelector((state) => state.auth)

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function formSubmit(value) {
    console.log("value", value);
    dispatch(login({ formValue: value, navigate }))

  }

  const initialValues =
  {
    email: "",
    password: ""
  }

  const validationSchema = object({
    email: string().email("Email is required").required("Email is required"),
    password: string().min(8, "password must be atleast 8 characters").max(20, "password can be maximum 20 characters ").required("Password is required")
  })

  // function handleSubmit(e) {
  //   e.preventDefault();

  //   const formValue = { email, password }
  //   dispatch(login({ formValue: value, navigate }))

  // }

  return (

    <div className='container login py-5'>
      <div className="back-btn mb-3" style={{ cursor: "pointer" }} onClick={() => navigate("/")}> <span className='fa-solid fa-angle-left'></span>&nbsp; Back </div>

      <div className="row px-2 d-flex justify-content-center">

        <div className="col-md-4  rounded-3 border border-1  shadow p-5 bg-light login">
          <Formik validationSchema={validationSchema} initialValues={initialValues} onSubmit={formSubmit}>{
            () => {
              return <Form>
                <h4 className='text-center mb-4'>Login</h4>
                <Field name="email" type="email" className="form-control mb-4" placeholder="Enter email" />
                <ErrorMessage className='text-danger mb-2' name="email" component="div" />

                <Field name="password" type="password" className="form-control mb-4" placeholder="Enter password" />
                <ErrorMessage className='text-danger mb-2' name="password" component="div" />
                <p className='text-danger loginError'>{errorMsg}</p>

                <button className='btn-primary btn w-100 mb-3' type='submit'>
                  {
                    loading ? "logging in.." : "Login"
                  }
                </button>

                <div className='d-flex justify-content-between'>
                  <Link to="/help"> <p className='my-0 text-primary'>Forgot password?</p></Link>
                  <Link to="/signup"> <p className='my-0 text-primary'>Sign up</p></Link>
                </div>


              </Form>
            }
          }

          </Formik>
          {/* <form action="">
              <h2 className='text-center mb-5'>Login</h2>

              <input type="email" placeholder='Enter email' className='form-control mb-4' onChange={(e) => setEmail(e.target.value)} />

              <input type="password" placeholder='Enter password' className='form-control mb-4' onChange={(e) => setPassword(e.target.value)} />

              <hr />
              <button className='btn btn-primary w-100 mb-3' onClick={handleSubmit} >Login</button>
              <Link to="/help"> <p className='my-0'>Forgot password?</p></Link>
            </form> */}
        </div>
      </div>
    </div>

  )
}

export default Login
