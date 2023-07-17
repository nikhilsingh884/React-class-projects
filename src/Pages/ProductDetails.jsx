import React, { useContext, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductDetails } from '../Redux/ProductSlice';
import { useNavigate, useParams } from 'react-router-dom';
import { AppDetails } from '../App';

function ProductDetails() {

    const { loading, productDetails } = useSelector((state) => state.product)
    const { cart, setCart } = useContext(AppDetails)

    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    console.log(productDetails);


    useEffect(() => {
        dispatch(getProductDetails(id))
    }, [])

    // =================================================================================================

    if (loading) {
        return <div className="container d-flex justify-content-center align-items-center  pt-5">{
            loading && <div>
                <div className="loader pt-5 mt-5">
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                    <div className="bar4"></div>
                    <div className="bar5"></div>
                    <div className="bar6"></div>
                    <div className="bar7"></div>
                    <div className="bar8"></div>
                    <div className="bar9"></div>
                    <div className="bar10"></div>
                    <div className="bar11"></div>
                    <div className="bar12"></div>
                </div>
            </div>
        }
        </div>
    }

    // console.log(cocktailDetails);

    return (
        <div className="main-body">
            <div className='container container-details py-5 mt-5'>
                <div className='d-flex justify-content-start'><div className="btn btn-dark rounded-0 btn-sm mb-3 " onClick={() => navigate(-1)}><span className='fa-solid fa-arrow-left'></span> Back</div> </div>
                <div className='border border-2  shadow bg-bg-secondary-subtle'>
                    <div className="row">
                        <div className="col-md-4 p-5">
                            <img src={productDetails.image} alt="" style={{ height: "100%", width: "100%", borderRadius: "10px" }} />
                        </div>
                        <div className="col-md-8 p-5">

                            <div className="d-flex align-items-center">
                                <div> <h1 className='text-left fw-bold text-muted me-2'>{productDetails.title} </h1>
                                    <p className='mb-0 text-muted'>(Product ID: {id})</p>
                                </div>
                            </div>

                            <h5 className='mb-4'>Type: <span className='fs-5 fw-light'>{productDetails.category}</span> </h5>

                            <div className='p-3 rounded-3 bg-light'>
                                <h3 className=''>Description</h3>
                                <hr />
                                <p className='mb-1 text-muted'>{productDetails.description}</p>
                            </div>

                            <div className='p-3 rounded-3 mt-2 bg-light'>
                                <p className='text-dark'>
                                   Price:  {productDetails.price}
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails