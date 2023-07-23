
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductList } from '../Redux/ProductSlice'
import ProductCard from '../Components/ProductCard'


function Product() {

  const dispatch = useDispatch()
  const { productList, loading } = useSelector((state) => state.product)



  useEffect(() => {
    dispatch(getProductList())
  }, []);



  return (
    <div className='main  py-5 mt-4'>
      <div className="search-bg-clothes d-flex justify-content-between search-head ">
        <div>
          <h1 style={{ fontSize: "64px" }} className="mb-2 fw-bolder category text-white">Clothing </h1>
          <hr />

          <span style={{ color: "white" }}>Explore our finest collection this monsoon. 50% off on monsoon sale from 11th July. </span>
        </div>
        <div className=" d-flex cocktailSearch-outer justify-content-center align-items-center">
          <div class="input-group mb-3 ">
            <input type="text" class="form-control rounded-start-5" placeholder="Search Clothes" aria-label="Recipient's username" aria-describedby="button-addon2" />
            <button style={{ backgroundColor: "#7d64ed" }} class="btn btn-primary rounded-end-5 " type="button" id="button-addon2">Search</button>
          </div>
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
      <div className='container'>
        <div className="row py-5 m-0">
          {
            productList &&
            productList.map((item, index) => {
              return <ProductCard key={index} item={item} />

            })}
        </div>
      </div>
    </div>

  )
}

export default Product
