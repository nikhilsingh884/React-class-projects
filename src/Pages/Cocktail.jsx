import { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom';
import { AppDetails } from '../App';
import Container from '../Components/Container';

function Cocktail() {

    const [drinks, setDrinks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchValue, setSearchValue] = useState("");

    const appDetails = useContext(AppDetails);

    function fetchCocktails() {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchValue}`)
            .then((resp) => resp.json())
            .then((data) => {
                setDrinks(data.drinks)
                setIsLoading(false);
            })
    }


    useEffect(() => {
        fetchCocktails();
    }, []);

    // -------------------------------

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
        fetchCocktails();
        setSearchValue("");
    }

    function addToCart(item){
        
    }

    return (
        <Container>
            <div className="container mt-5 ">
                <div className="cocktails-head d-flex justify-content-between align-items-center">
                    <h4 style={{ fontSize: "44px", marginTop: "20px" }}>Cocktails</h4>
                    <div className="search-f d-flex h-50 ">
                        <input className='form-control rounded-0 w-75' type="text" placeholder='Search' value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
                        <button className='btn btn-dark rounded-0' onClick={handleSearch}>Search</button>
                    </div>
                </div>

                <hr />
                <div className="row">
                    {drinks.map((item) => {
                        const { strDrinkThumb, strDrink, idDrink, strInstructions } = item;
                        return (

                            <div className="col-md-3 col-6 mb-4" key={idDrink}>
                                <div className="card shadow cocktails-card">
                                    <img src={strDrinkThumb} alt="" />
                                    <div className="card-body">Drink: {strDrink}
                                        <p className='text-truncate' title={strInstructions}>{strInstructions}</p>
                                        <div className='d-flex justify-content-between'>
                                            <Link to={`/Cocktail/${idDrink}`} className='btn btn-dark'>View more</Link>
                                            <button className='btn btn-dark' onClick={()=>addToCart(item)}>Add to cart</button></div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </Container>
    )
}

export default Cocktail
