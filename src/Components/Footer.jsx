import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
      
          <div className=" mt-5">
              <footer className="text-center text-white" style={{ backgroundColor: '#310059' }}>
                  <div className="container">
                      <section className="mt-5">
                          <div className="row text-center d-flex justify-content-center pt-5">
                              <div className="col-md-2">
                                  <h6 className="text-uppercase font-weight-bold">
                                      <Link to="/about" className="text-white  text-decoration-none">About us</Link>
                                  </h6>
                              </div>
                              <div className="col-md-2">
                                  <h6 className="text-uppercase font-weight-bold">
                                      <Link to="/mobiles" className="text-white  text-decoration-none">Mobiles & Laptops</Link>
                                  </h6>
                              </div>
                              <div className="col-md-2">
                                  <h6 className="text-uppercase font-weight-bold">
                                      <Link to="/cocktail" className="text-white  text-decoration-none">Drinks</Link>
                                  </h6>
                              </div>
                              <div className="col-md-2">
                                  <h6 className="text-uppercase font-weight-bold">
                                      <Link to="/product" className="text-white  text-decoration-none">Clothing</Link>
                                  </h6>
                              </div>
                              <div className="col-md-2">
                                  <h6 className="text-uppercase font-weight-bold">
                                      <Link to="" className="text-white  text-decoration-none">Contact</Link>
                                  </h6>
                              </div>
                          </div>
                      </section>
                      <hr className="my-5" />
                      <section className="mb-5">
                          <div className="row d-flex justify-content-center">
                              <div className="col-lg-8">
                                  <p>
                                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                                      distinctio earum repellat quaerat voluptatibus placeat nam,
                                      commodi optio pariatur est quia magnam eum harum corrupti
                                      dicta, aliquam sequi voluptate quas.
                                  </p>
                              </div>
                          </div>
                      </section>
                      <section className="text-center mb-5">
                          <a href className="text-white me-4">
                              <i className="fab fa-facebook-f" />
                          </a>
                          <a href className="text-white me-4">
                              <i className="fab fa-twitter" />
                          </a>
                          <a href className="text-white me-4">
                              <i className="fab fa-google" />
                          </a>
                          <a href className="text-white me-4">
                              <i className="fab fa-instagram" />
                          </a>
                          <a href className="text-white me-4">
                              <i className="fab fa-linkedin" />
                          </a>
                          <a href className="text-white me-4">
                              <i className="fab fa-github" />
                          </a>
                      </section>
                  </div>
                  <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                      © 2023 Copyright:
                      <a className="text-white text-decoration-none" href="https://niksuperstore.netlify.com/"> niksuperstore.netlify.com</a>
                  </div>
              </footer>
          </div>
    </div>
  )
}

export default Footer
