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

    function handleSearch() {
        dispatch(getMobilesList({ search: searchValue }));
        setSearchValue("");
    }

    useEffect(() => {
        handleSearch()
    }, []);

    useEffect(() => {
        dispatch(getMobilesList(searchValue))
    }, [])


    return (
        <div className='main mt-4 py-5 bg-light'>
            <div className="search-bg d-flex justify-content-between search-head ">
                <div>
                    <h1 className="mb-2 fw-bolder category text-white ">Mobiles & laptops</h1>
                    <hr />

                    <span style={{ color: "white" }}>With latest hardware that matches your requirements..</span>
                </div>
                <div className=" d-flex cocktailSearch-outer justify-content-center align-items-center">
                    <div class="input-group mb-3 ">
                        <input type="text" class="form-control" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder="Search mobiles" aria-label="Recipient's username" aria-describedby="button-addon2" />
                        <button class="btn btn-primary " type="button" id="button-addon2" onClick={handleSearch} >Search</button>
                    </div>
                </div>
            </div>
            <div className="container loader-container d-flex justify-content-center align-items-center py-5">{
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
            <div className='container '>
                <div className="row">

                    {
                        mobilesList &&
                        mobilesList.map((item, index) => {
                            return <MobilesCard key={index} item={item} />

                        })}
                </div>
            </div>

        </div>
    )
}

export default Mobiles
