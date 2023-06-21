import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCocktailDetails } from '../Redux/cocktailSlice';
import { useParams } from 'react-router-dom';
import Cocktail from './Cocktail';

function CocktailDetails() {

    const { loading, cocktailDetails } = useSelector((state) => state.cocktail)

    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCocktailDetails(id))
    }, [])

    if(loading){
        return <div className="container d-flex justify-content-center align-items-center  pt-5">{
            loading && <div>
                <div class="loader pt-5 mt-5">
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
            </div>
        }
        </div>
    }

    // console.log(cocktailDetails);

    return (
        <div className='container container-details py-5 mt-5'>
            <div className='border border-2 rounded-3 shadow bg-bg-secondary-subtle'>
                <div className="row">
                    <div className="col-md-4 p-5">
                        <img src={cocktailDetails.strDrinkThumb} alt="" style={{ height: "100%", width: "100%", borderRadius: "10px" }} />
                    </div>
                    <div className="col-md-8 p-5">
                        <div className="d-flex align-items-center">
                            <h1 className='text-left text-muted me-2'>{cocktailDetails.strDrink} </h1>
                            <p className='mb-0 text-muted'>(Product ID: {id})</p>
                        </div>
                        <h5 className='mb-4'>Type: <span className='fs-5 fw-light'>{cocktailDetails.strCategory}</span> </h5>

                        <div className='p-3 rounded-3 bg-light'>
                            <h3 className=''>Ingredients</h3>
                            <hr />
                            <p className='mb-1 text-muted'>{cocktailDetails.strIngredient1}</p>
                            <p className='mb-1 text-muted'>{cocktailDetails.strIngredient2}</p>
                            <p className='mb-1 text-muted'>{cocktailDetails.strIngredient3}</p>
                            <p className='mb-1 text-muted'>{cocktailDetails.strIngredient4}</p>
                        </div>

                        <div className='p-3 rounded-3 mt-2 bg-light'>
                            <p className='text-dark'>
                                {cocktailDetails.strInstructions}
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CocktailDetails
