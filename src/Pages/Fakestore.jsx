import React, { useContext, useEffect, useState } from 'react'
import Container from '../Components/Container';
import { AppDetails } from '../App';


function Fakestore() {

    const {isLoading,setIsLoading}=useContext(AppDetails)
    const [fakeproducts, setFakeproducts] = useState([]);

    function fetchFakestore() {

        fetch(`https://fakestoreapi.com/products`)
            .then((resp) => resp.json())
            .then((data) => {
                setFakeproducts(data)
                setIsLoading(false);

            })
    }

    useEffect(() => {
        fetchFakestore()
    }, []);


    if (isLoading) {
        return (
            <div className="container text-center">
                <div className="spinner-border " role="status">
                </div>
                <h3 className=" text-center p-5">Loading...</h3>
            </div>
        );
    }
    return (
        <Container>
            <div>
                <div className="container mt-5">
                    <div className="row">

                        {fakeproducts.map((item) => {
                            const { id, title, price, image, description } = item;

                            return (
                                <div className="col-md-3">
                                    <div className="card fakestore-card mb-4 shadow" key={id}>
                                        <div className="card-header">
                                            <img className='w-100' src={image} alt="" />

                                        </div>
                                        <div className="card-body">
                                            <h5 className='text-truncate'>{title}</h5>
                                            <p className='text-truncate'>{description}</p>
                                            <h3>{price}</h3>

                                        </div>
                                        <div className="card-footer">
                                            <button className='btn btn-dark'>View more</button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </Container>
    )
}

export default Fakestore
