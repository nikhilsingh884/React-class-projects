import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';

import Container from '../Components/Container';
import { AppDetails } from '../App';
import cartLength from '../Components/Navbar'


function Courses() {

  const navigate = useNavigate()
  const { cart, setCart, courseListData, setCourseListData } = useContext(AppDetails)

  function addToCart(item) {
    const data = courseListData.map((singleItem) => {
      if (singleItem.id === item.id) {
        return { ...singleItem, cart: true };
      } else {
        return singleItem;
      }
    });

    setCourseListData(data);

    const updatedCart = [...cart, item];
    setCart(updatedCart);

    localStorage.setItem('cart', JSON.stringify(updatedCart));
  }

  return (
    <Container>
      <div className="div-bg">
        <div className="container courses mt-5">
          <div className="d-flex justify-content-between">
            <h3 className='fs-1 text-muted '>Courses</h3>

            <button onClick={() => { navigate('/') }} className='btn btn-outline-dark h-50 me-3'>
             <span className='fa-solid fa-arrow-left'></span> Back</button>
          </div>

          <div className="row">
            {
              courseListData.map((item, index) => {
                const { name, desp, price, id, cart } = item;
                return <div key={index} className='col-md-6 p-3'>

                  <div className="card mb-3 me-md-3 me-sm-0 shadow">

                    <div className="card-header bg-light">
                      <h4 className='text-info fw-bolder'>{name}</h4>
                      <h6>Product ID: {id}</h6>
                    </div>

                    <div className="card-body">
                      <p>{desp}</p>
                    </div>

                    <div className='d-flex justify-content-between card-footer'>
                      <h4 className=''>Rs/- {price} </h4>
                      <div className="btns">
                        <button className='btn btn-sm btn-dark border-dark me-2 ' onClick={() => navigate(`/course/${id}`, { state: item })}>View more..</button>

                        {cart ? <button className=' btn btn-sm btn-success '>Added..!! <span className='fa-solid fa-check-circle'></span></button> : (<button className='btn btn-sm btn-dark border-dark' onClick={() => addToCart(item)}>Add to cart</button>)}


                      </div>
                    </div>
                  </div>
                </div>
              })
            }

          </div>
        </div>
      </div>
    </Container>

  )
}

export default Courses
