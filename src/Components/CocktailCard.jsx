import React from 'react'
import { useNavigate } from 'react-router-dom';

function CocktailCard({ item }) {
    const { strDrinkThumb, strCategory, strDrink, idDrink } = item;

    const navigate = useNavigate();
    return (

        <div className="col-md-2 col-sm-6 mb-5" >
            <div className="card shadow" onClick={()=>navigate(`/cocktail/${idDrink}`)} style={{cursor:"pointer"}}>
                <img src={strDrinkThumb} className="w-100" alt="" />
                <div className="card-body p-2">
                    <h6 className="m-0 text-truncate fw-bold">{strDrink}</h6>
                    <p className="m-0 text-secondary" style={{ fontSize: "12px" }}>
                        {strCategory}
                    </p>
                </div>
                <div className="card-footer px-1 d-flex justify-content-between">
                    <div className=" btn btn-outline-dark btn-sm">Add to cart</div>
                </div>
            </div>
        </div>
    );
}


export default CocktailCard
