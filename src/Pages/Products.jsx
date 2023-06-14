import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getProductList } from '../Redux/ProductSlice';

function Products() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductList())
    }, [])
    return (
        <div>

        </div>
    )
}

export default Products
