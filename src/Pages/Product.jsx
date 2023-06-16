
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductList } from '../Redux/ProductSlice'
import ProductCard from '../Components/ProductCard'

function Product() {

  const dispatch = useDispatch()
  const { productList, loading } = useSelector((state) => state.product)
  const [searchValue, setSerachValue] = useState("")



  useEffect(() => {
    dispatch(getProductList())
  }, [])

  return (
    <div className='container py-5'>
      <div className="d-flex justify-content-between">
        <h1>Products</h1>
        <div className="d-flex justify-content-center align-items-center">
          <input type="text" placeholder="search cocktails" className="form-control border border-2 h-75" value={searchValue} onChange={(e) => setSerachValue(e.target.value)} />
        </div>
      </div>
      <hr />
      {loading && <h2>Loading..</h2>}
      <div className="row py-5">
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
