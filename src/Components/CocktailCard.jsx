import React, { useContext, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { AppDetails } from '../App';
import { useSelector } from 'react-redux';

function CocktailCard({ item }) {
    const { islogin } = useSelector((state) => state.auth)

    const addBtn = useRef()

    const { drinksCart, setDrinksCart } = useContext(AppDetails)

    const { strDrinkThumb, strCategory, strDrink, idDrink } = item;

    const navigate = useNavigate();

    const price = 259;

    function addToCart(item) {
        const dataFound = drinksCart.find((singleItem) => singleItem.idDrink === item.idDrink);

        if (dataFound) {
            alert("Already added in cart..!!");
        } else {
            setDrinksCart([...drinksCart, item]);
            addBtn.current.style.background = "green";
            addBtn.current.textContent = "Added";
        }

    }

    // ========================add to cart after login only==========================

    // function addToCart(item) {
    //   const test = localStorage.getItem("appLogin")
    //   if (test)
    //    {
    //     const dataFound = mobilesCart.find((singleItem) => singleItem.id === item.id);

    //     if (dataFound) {
    //       alert("Already added in cart..!!");
    //     } else {
    //       setMobilesCart([...mobilesCart, item]);
    //       addBtn.current.style.background = "green";
    //       addBtn.current.textContent = "Added";
    //     }
    //   } else {
    //     navigate('/login')
    //   }
    // }



    return (

        <div className="col-md-2 col-6 mb-5 " >
            <div className="card shadow rounded-0" onClick={() => navigate(`/cocktail/${idDrink}`)} style={{ cursor: "pointer" }}>
                <img src={strDrinkThumb} className="w-100" alt="" />
                <div className="card-body p-2">
                    <h6 className="m-0 text-truncate fw-bold">{strDrink}</h6>
                    <p className="m-0 text-secondary text-truncate" style={{ fontSize: "12px" }}>
                        {strCategory}
                    </p>
                    <h5>{price}</h5>
                </div>
            </div>
            <div className="card-footer d-flex justify-content-between mt-2">
                <div className=" btn btn-primary btn-sm w-100 rounded-0 " ref={addBtn} onClick={() => addToCart(item)}> <span className='fa-solid fa-cart-shopping'></span> &nbsp;  Add to cart</div>
            </div>
        </div>
    );
}


export default CocktailCard
