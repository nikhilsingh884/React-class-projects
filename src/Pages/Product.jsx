
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
    <div className='container py-5 mt-5'>
      <div className="d-flex justify-content-between">
        <h1>Products</h1>
        <div className="d-flex justify-content-center align-items-center">
          <input type="text" placeholder="search cocktails" className="form-control border border-2 h-75" value={searchValue} onChange={(e) => setSerachValue(e.target.value)} />
        </div>
      </div>
      <hr />
      {loading && <div className='d-flex justify-content-center'>
        <div class="loader">
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
          <div class="bar4"></div>
          <div class="bar5"></div>
          <div class="bar6"></div>
          <div class="bar7"></div>
          <div class="bar8"></div>
          <div class="bar9"></div>
          <div class="bar10"></div>
          <div class="bar11"></div>
          <div class="bar12"></div>
        </div>Loading...
      </div>}
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
