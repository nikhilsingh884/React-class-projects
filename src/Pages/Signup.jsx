import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import { object, string } from 'yup'
import { signup } from '../Redux/authSlice';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loading } from '../Redux/ProductSlice';

function Signup() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    function signupSubmit(value) {
        console.log("value", value);
        dispatch(signup({ formValue: value, navigate }))

    }
    const validationSchema = object({
        email: string().email("Email is required").required("Email is required"),
        password: string().min(8, "password must be atleast 8 characters").max(20, "password can be maximum 20 characters ").required("Password is required")
    })

    const initialValues =
    {
        name:"",
        email: "",
        password: ""
    }

    return (
        <div className='container py-5'>
            <div className="row d-flex justify-content-center">
                <div className="col-md-4  rounded-3 border border-1   p-5 bg-light ">
                    <Formik validationSchema={validationSchema} initialValues={initialValues} onSubmit={signupSubmit}>
                        {
                            () => {
                                return <Form>
                                    <h4 className='text-center mb-4'>Signup</h4>

                                    <Field name="name" type="text" className="form-control mb-4" placeholder="Enter name" />
                                    <ErrorMessage className='text-danger mb-2' name="name" component="div" />

                                    <Field name="email" type="email" className="form-control mb-4" placeholder="Enter email" />
                                    <ErrorMessage className='text-danger mb-2' name="email" component="div" />

                                    <Field name="password" type="password" className="form-control mb-4" placeholder="Enter password" />
                                    <ErrorMessage className='text-danger mb-2' name="password" component="div" />
                                    

                                    <p className='text-danger loginError'>{ }</p>

                                    <button className='btn-primary btn w-100 mb-3' type='submit'>
                                        {
                                            loading ? "Signing up.." : "SignUp"
                                        }
                                    </button>

                                    <div className='d-flex justify-content-end'>

                                        <Link to="/login"> <p className='my-0 text-primary'>Login</p></Link>
                                    </div>


                                </Form>
                            }
                        }
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default Signup
