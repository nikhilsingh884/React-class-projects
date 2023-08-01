import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router'
import { getMobilesDetails } from '../Redux/MobilesSlice';
import { useNavigate } from 'react-router-dom';

function MobilesDetails() {
    const params = useParams()
    const { id } = params;

    const { loading, mobilesDetails } = useSelector((state) => state.mobiles)

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getMobilesDetails(id));
    }, [])

    if (loading) {
        return <div className="container py-5 mt-5 d-flex justify-content-center align-items-center">{
            loading && <div>
                <div className="loader">
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

    return (
        <div>

            <div className='container container-details py-5 mt-4'>
                <div className='d-flex justify-content-end'><div className="btn btn-primary btn-sm mb-3 " onClick={() => navigate(-1)}>Back</div> </div>

                <div className='border border-2 rounded-3 shadow bg-bg-secondary-subtle'>
                    <div className="row">
                        <div className="col-md-4 p-5">
                            <img src={mobilesDetails.thumbnail} alt="" style={{ height: "100%", width: "100%", borderRadius: "10px" }} />
                        </div>
                        <div className="col-md-8 p-5">
                            <div className="d-flex align-items-center">
                                <h1 className='text-left text-muted me-2'>{mobilesDetails.title} </h1>
                                <p className='mb-0'>(Product ID: {id})</p>
                            </div>
                            <h5 className='mb-4'>Ratings: {mobilesDetails.rating} </h5>

                            <div className='p-3 rounded-3 bg-light'>
                                <h3>Pictures</h3>
                                <hr />
                                {/* <img src={} alt="" /> */}
                            </div>

                            <div className='p-3 rounded-3 mt-2 bg-light'>
                                <h5>
                                    {mobilesDetails.description}
                                </h5>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobilesDetails