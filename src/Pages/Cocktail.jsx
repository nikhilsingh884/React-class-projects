import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CocktailCard from "../Components/CocktailCard";
import { getCocktailList } from "../Redux/cocktailSlice";

function Cocktail() {
  const { loading, cocktailList } = useSelector((state) => state.cocktail);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCocktailList());
  }, []);

  if (loading) {
    return <h2>Loading</h2>;
  }

  return (
    <div className="container py-4">
      <h1>Cocktails</h1>
      <div className="row py-5">
        {cocktailList.map((item, index) => {
          return <CocktailCard key={index} item={item}/>
        })}
      </div>
    </div>
  );
}

export default Cocktail;