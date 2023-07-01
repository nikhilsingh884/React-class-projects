
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
    <div className='container products py-5 mt-5'>
      <div className="d-flex justify-content-between search-head">
        <h1 className="mb-2 fw-bolder category">Clothing</h1>
        <div className=" cocktailSearch-outer d-flex justify-content-center align-items-center">
          <input type="text" placeholder="search clothes" className="form-control border border-1 rounded-0 border-dark h-50" value={searchValue} onChange={(e) => setSerachValue(e.target.value)} />
        </div>
      </div>
      <div className="container d-flex justify-content-center align-items-center">{
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
