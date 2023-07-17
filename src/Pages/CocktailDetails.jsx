import React, { useContext, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCocktailDetails } from '../Redux/cocktailSlice';
import { useNavigate, useParams } from 'react-router-dom';
import { AppDetails } from '../App';

function CocktailDetails({ item }) {

    const { loading, cocktailDetails } = useSelector((state) => state.cocktail)
    const { drinksCart, setDrinksCart } = useContext(AppDetails)
    const { strDrinkThumb, strCategory, strDrink, strInstructions, strIngredient4, strIngredient3, strIngredient2, strIngredient1 } = item;



    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const addBtn = useRef()




    useEffect(() => {
        dispatch(getCocktailDetails(id))
    }, [])

    // function addToCart(item) {
    //     const dataFound = drinksCart.find((singleItem) => singleItem.idDrink === item.idDrink);

    //     if (dataFound) {
    //         alert("Already added in cart..!!");
    //     } else {
    //         setDrinksCart([...drinksCart, item]);
    //         addBtn.current.style.background = "green";
    //         addBtn.current.textContent = "Added";
    //     }
    // }

    // =================================================================================================

    if (loading) {
        return <div className="container d-flex justify-content-center align-items-center  pt-5">{
            loading && <div>
                <div className="loader pt-5 mt-5">
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
    }

    // console.log(cocktailDetails);

    return (
        <div className="main-body">
            <div className='container container-details py-5 mt-5'>
                <div className='d-flex justify-content-start'><div className="btn btn-primary rounded-0 btn-sm mb-3 " onClick={() => navigate(-1)}><span className='fa-solid fa-arrow-left'></span> Back</div> </div>
                <div className='border border-2  shadow bg-bg-secondary-subtle'>
                    <div className="row">
                        <div className="col-md-4 p-5">
                            <img src={strDrinkThumb} alt="" style={{ height: "100%", width: "100%", borderRadius: "10px" }} />
                        </div>
                        <div className="col-md-8 p-5">

                            <div className="d-flex align-items-center">
                                <div> <h1 className='text-left fw-bold text-muted me-2'>{strDrink} </h1>
                                    <p className='mb-0 text-muted'>(Product ID: {id})</p>
                                </div>
                                {/* <div className="card-footer d-flex justify-content-between mt-2">
                                    <div className=" btn btn-primary btn-sm w-100 rounded-0 " ref={addBtn} onClick={() => addToCart(item)}>Add to cart</div>
                                </div> */}
                            </div>

                            <h5 className='mb-4'>Type: <span className='fs-5 fw-light'>{strCategory}</span> </h5>

                            <div className='p-3 rounded-3 bg-light'>
                                <h3 className=''>Ingredients</h3>
                                <hr />
                                <p className='mb-1 text-muted'>{strIngredient1}</p>
                                <p className='mb-1 text-muted'>{strIngredient2}</p>
                                <p className='mb-1 text-muted'>{strIngredient3}</p>
                                <p className='mb-1 text-muted'>{strIngredient4}</p>
                            </div>

                            <div className='p-3 rounded-3 mt-2 bg-light'>
                                <p className='text-dark'>
                                    {strInstructions}
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CocktailDetails
