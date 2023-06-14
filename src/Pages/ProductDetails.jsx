import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router'
import { getProductDetails } from '../Redux/ProductSlice';
import { useNavigate } from 'react-router-dom';

function ProductDetails() {
    const params = useParams()
    const { id } = params;

    const { loading, productDetails } = useSelector((state) => state.product)

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getProductDetails(id))
    }, [])

    if (loading) {
        return <div className='container d-flex justify-content-center align-items-center mt-5 pt-5'><h1> Loading...</h1></div>
    }

    return (
        <div>

            <div className='container container-details py-5'>
                <div className='d-flex justify-content-end'><div className="btn btn-primary btn-sm mb-3 " onClick={() => navigate(-1)}>Back</div> </div>

                <div className='border border-2 rounded-3 shadow bg-bg-secondary-subtle'>
                    <div className="row">
                        <div className="col-md-4 p-5">
                            <img src={productDetails.thumbnail} alt="" style={{ height: "100%", width: "100%", borderRadius: "10px" }} />
                        </div>
                        <div className="col-md-8 p-5">
                            <div className="d-flex align-items-center">
                                <h1 className='text-left text-muted me-2'>{productDetails.title} </h1>
                                <p className='mb-0'>(Product ID: {id})</p>
                            </div>
                            <h5 className='mb-4'>Ratings: {productDetails.rating} </h5>

                            <div className='p-3 rounded-3 bg-light'>
                                <h3>Pictures</h3>
                                <hr />
                                {/* <img src={} alt="" /> */}
                            </div>

                            <div className='p-3 rounded-3 mt-2 bg-light'>
                                <h5>
                                    {productDetails.description}
                                </h5>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
