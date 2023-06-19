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
    <div className="container cocktails py-4 mt-5 ">
      <div>
        <div className="d-flex justify-content-between search-head ">
          <h1 className="mb-2 fw-bolder">Cocktails</h1>
          <div className="d-flex justify-content-center align-items-center">
            <input type="text" placeholder="search cocktails" className="cocktailSearch form-control border border-1 h-75 rounded-5" value={searchValue} onChange={(e) => setSerachValue(e.target.value)} />
          </div>
        </div>
        <hr />

        <div className="container d-flex justify-content-center align-items-center  pt-5">{
          loading && <div>
            <div class="loader">
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