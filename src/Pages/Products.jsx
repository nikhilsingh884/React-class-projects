import React, { useEffect } from 'react'
import { getProductList } from '../Redux/ProductSlice'
import { useDispatch, useSelector } from 'react-redux'

function Products() {

const dispatch= useDispatch();
const {loading,productList}=useSelector((state)=>state.product)

    useEffect(() => {
        dispatch(getProductList())
    }, [])


    return (
        <div className='container'>
            <div className="row">

                {
                    productList.map((item,index)=>{
                        const {}=item;
                        return <div className="col-md-3 p-4">
                            <div className="card">
                                <img src="" alt="" />
                            </div>
                        </div>
                    })
                }
            </div>
            
        </div>
    )
}

export default Products
