import React from 'react'

function CocktailCard({item}) {
    const { strDrinkThumb, strCategory, strDrink, idDrink } = item;
    return (
        
        <div className="col-md-2 mb-3">
            <div className="card rounded-3">
                <img src={strDrinkThumb} className="w-100" alt="" />
                <div className="card-body p-2">
                    <h6 className="m-0">{strDrink}</h6>
                    <p className="m-0 text-secondary" style={{ fontSize: "12px" }}>
                        {strCategory}
                    </p>
                </div>
                <div className="card-footer px-1">
                    <div className="btn btn-danger btn-sm">View more</div>
                </div>
            </div>
        </div>
    );
}

export default CocktailCard
