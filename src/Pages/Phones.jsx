import { useState, useEffect, useContext } from 'react';
import Container from '../Components/Container';
import { AppDetails } from '../App';

function Phones() {
    const [phones, setPhones] = useState([]);
    const [searchValue, setSearchValue] = useState("");

    const { isLoading, setIsLoading } = useContext(AppDetails)


    function fetchPhones() {
        fetch(`https://dummyjson.com/products/search?q=${searchValue}`)
            .then((resp) => resp.json())
            .then((data) => {
                console.log('data', data);
                setPhones(data.products);
                setIsLoading(false);

            });
    }

    useEffect(() => {
        fetchPhones();
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

    function handleSearch() {
        fetchPhones();
        setSearchValue("");
    }
    return (
        <Container>
            <div className="container mt-5">
                <div className="d-flex justify-content-between ">
                    <h4 style={{ fontSize: "44px" }}>Electronics</h4>
                    <div className="search-f d-flex electronics-search align-items-center">
                        <input className='form-control w-75 rounded-0 ' type="text" placeholder='Search' value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
                        <button className='btn btn-dark rounded-0 ' onClick={handleSearch}>Search</button>
                    </div>
                </div>
                <hr />
                <div className="row">
                    {phones.map((item) => {
                        return (
                            <div className="col-md-3 col-6 mb-4 ">
                                <div className="card phones-card mb-4 shadow">
                                    <img src={item.thumbnail} style={{ height: "200px" }} alt="" />
                                    <div className="card-body">
                                        {item.title}
                                        <p className='text-truncate' title={item.description}>{item.description}</p>
                                        <button className='btn btn-dark'>Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <hr />
            </div>
        </Container>
    );
}

export default Phones;
