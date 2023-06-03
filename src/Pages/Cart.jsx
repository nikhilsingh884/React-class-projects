import React, { useContext } from 'react'
import Container from '../Components/Container'
import { AppDetails } from '../App'
import { Link, useNavigate } from 'react-router-dom';


function Cart() {

    const navigate = useNavigate()


    const { cart, setCart } = useContext(AppDetails);
    console.log(cart);

    if (cart.length === 0) {
        return (
            <Container>
                <h1 className='mt-5 text-center'>Cart is empty. Add some items first.</h1>
                <div className="d-flex justify-content-center align-items-center mt-3">
                    <button className='btn-sm btn btn-primary' onClick={() => { navigate('/') }} >Click here to shop</button>
                </div>
            </Container>
        )
    }
    return (
        <Container>
            <div className="row mt-5">
                {cart.map((item,) => {
                    const { name, desp, price, id } = item;

                    return (


                        <div className="col-md-4 d-flex">
                            <div className="card mb-3 me-3 shadow">

                                <div className="card-header bg-light">
                                    <h4 className='text-info fw-bolder'>{name}</h4>
                                    <h6>Product ID: {id}</h6>
                                </div>

                                <div className="card-body">
                                    <p>{desp}</p>
                                </div>

                                <div className='d-flex justify-content-between card-footer'>
                                    <h4 className=''>Rs/- {price} </h4>

                                </div>
                            </div>
                        </div>
                            )
                    })
                    }
            </div>
        </Container>
    )
}

export default Cart
