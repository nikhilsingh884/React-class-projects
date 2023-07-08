import React, { useEffect, useState } from 'react'
import { getMobilesList } from '../Redux/MobilesSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router';
import MobilesCard from '../Components/MobilesCard';

function Mobiles() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, mobilesList } = useSelector((state) => state.mobiles)
    const [searchValue, setSearchValue] = useState("")

    useEffect(() => {
        dispatch(getMobilesList(searchValue))
    }, [searchValue])


    return (
        <div className='container mt-5 py-5'>
            <div className="d-flex justify-content-between search-head ">
                <h1 className="mb-2 fw-lighter category">Mobiles & Laptops</h1>
                <div className="d-flex cocktailSearch-outer justify-content-center align-items-center">
                    <input type="text" placeholder="search mobiles" className="form-control border border-1 rounded-0 border-dark h-50 " value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
                </div>
            </div>
            <div className="container d-flex justify-content-center align-items-center  pt-5">{
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
            <div className="row">

                {
                    mobilesList &&
                    mobilesList.map((item, index) => {
                        return <MobilesCard key={index} item={item} />

                    })}
            </div>

        </div>
    )
}

export default Mobiles
