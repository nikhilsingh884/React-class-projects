import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CocktailCard from "../Components/CocktailCard";
import { getCocktailList } from "../Redux/cocktailSlice";

function Cocktail() {
  const { loading, cocktailList } = useSelector((state) => state.cocktail);
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("")

  function handleSearch(){
    dispatch(getCocktailList({ search: searchValue }));
    setSearchValue("");
  }

  useEffect(() => {
    handleSearch()
  }, []);


  return (
    <div className="main mt-4 py-5 px-0 ">
      <div>
        <div className="search-bg d-flex justify-content-between search-head ">
          <div>
            <h1 className="mb-2 fw-bolder category text-white w-100">Drinks</h1>
            <hr />
            <span style={{ color: "white" }}>with mouth watering flavours and unique blends</span>
          </div>
          <div className=" d-flex cocktailSearch-outer justify-content-center align-items-center">
            <div class="input-group mb-3 ">
              <input type="text" class="form-control" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder="Search drinks" aria-label="Recipient's username" aria-describedby="button-addon2"/>
              <button class="btn btn-primary " type="button" id="button-addon2" onClick={handleSearch} >Search</button>
            </div>
          </div>
        </div>

        <div className="container d-flex justify-content-center align-items-center py-5">{
          loading && <div>
            <div className="loader">
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
      </div>
      <div className="container">
        <div className="row py-2">
          {
            cocktailList &&
            cocktailList.map((item, index) => {
              return <CocktailCard key={index} item={item} />
            })}
        </div>
      </div>
    </div>
  );
}

export default Cocktail;