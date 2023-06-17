import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CocktailCard from "../Components/CocktailCard";
import { getCocktailList } from "../Redux/cocktailSlice";

function Cocktail() {
  const { loading, cocktailList } = useSelector((state) => state.cocktail);
  const dispatch = useDispatch();
  const [searchValue, setSerachValue] = useState("")

  useEffect(() => {
    dispatch(getCocktailList({ search: searchValue }));
  }, [searchValue]);



  return (
    <div className="container py-4">
      <div>
        <div className="d-flex justify-content-between">
          <h1>Cocktails</h1>
          <div className="d-flex justify-content-center align-items-center">
            <input type="text" placeholder="search cocktails" className="form-control border border-2 h-75" value={searchValue} onChange={(e) => setSerachValue(e.target.value)}/>
          </div>
        </div>
        <hr />

        <div className="container d-flex justify-content-center align-items-center  pt-5">{
          loading && <h2>Loading..</h2>
        }

        </div>
      </div>
      <div className="row py-2">
        {
          cocktailList &&
          cocktailList.map((item, index) => {
            return <CocktailCard key={index} item={item} />
          })}
      </div>
    </div>
  );
}

export default Cocktail;