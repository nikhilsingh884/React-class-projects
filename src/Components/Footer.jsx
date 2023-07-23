import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div>

            <div className="">
                <footer className="text-center text-white" style={{ backgroundColor: '#310059' }}>
                    <div className="container">
                        <section className="">
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
                                        Discover a world of convenience and endless possibilities at our online store. Shop now and enjoy secure transactions, speedy delivery, and exceptional customer service. Experience hassle-free shopping with our wide range of products, competitive prices, and a seamless checkout process. Your satisfaction is our priority as we strive to exceed your expectations every time. Start exploring our virtual shelves and embark on a delightful shopping journey today!
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
