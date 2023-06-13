
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductList } from '../Redux/ProductSlice'
import ProductCard from '../Components/ProductCard'

function Product() {

  const dispatch = useDispatch()
  const { productList, loading } = useSelector((state) => state.product)


  useEffect(() => {
    dispatch(getProductList())
  }, [])

  return (
    <div className='container'>
      {loading && <h2>Loading..</h2>}
      <div className="row">
        {
          productList &&
          productList.map((item, index) => {
            return <ProductCard key={index} item={item} />

          })}
      </div>
    </div>

  )
}

export default Product
