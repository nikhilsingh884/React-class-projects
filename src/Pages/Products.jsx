import React, { useEffect, useState } from 'react'
import { getProductList } from '../Redux/ProductSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router';

function Products() {

    const dispatch = useDispatch();
    const navigate  = useNavigate();
    const { loading, productList } = useSelector((state) => state.product)
    const [searchValue, setSearchValue] = useState("")

    useEffect(() => {
        dispatch(getProductList(searchValue))
    }, [searchValue])


    return (
        <div className='container'>

            <div className="searchBar py-4 d-flex justify-content-end align-items-center">
                <input type="text " className='form-control w-25 border border-2' placeholder='search' value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
            </div>

             {loading && 
        <div className='container d-flex justify-content-center align-items-center mt-5 pt-5'><h1> Loading...</h1></div>
    }
            <div className="row">
                {productList.map((item, index) => {
                    const { thumbnail, title, description, id } = item;

                    return (
                        <div className="col-md-3 col-6 mb-4 ">
                            <div style={{ cursor: "pointer" }} key={index} className="card phones-card mb-4 shadow" onClick={() => navigate(`/products/${id}`)}>
                                <img src={thumbnail} style={{ height: "200px" }} alt="" />
                                <div className="card-body text-truncate">
                                    {title}
                                    <p className='text-truncate' title={description}>{description}</p>
                                    <button className='btn btn-dark'>Buy Now</button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

        </div>
    )
}

export default Products
