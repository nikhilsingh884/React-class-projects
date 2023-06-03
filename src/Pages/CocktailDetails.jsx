import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import Container from '../Components/Container';



function CocktailDetails() {
  const { id } = useParams()
  const [cocktailDetails, setCocktailDetails] = useState({});


  function fetchData() {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((resp) => resp.json())
      .then((data) =>
        setCocktailDetails(data.drinks[0]))
  }

  useEffect(() => {
    fetchData()
  }, []);

  const navigate = useNavigate();
  return (
    <Container>
      <div className="container mt-5">
        <div className="btn btn-outline-dark" onClick={() => navigate(-1)}>Back</div>
        <div className="main p-5 bg-light border border-3 rounded-4 my-4 shadow">
          <h4>Product ID: {id}</h4>
          <div className="row">
            <div className="col-md-4 shadow">
              <img style={{ height: "300px", borderRadius: "10px" }} src={cocktailDetails.strDrinkThumb} width="auto" alt="" />
            </div>
            <div className="col-md-8">
              <h2 className='text-danger'>Drink: {cocktailDetails.strDrink}</h2>
              <p className='text-muted'>{cocktailDetails.strInstructions}</p>
              <hr />
              <h3 style={{ marginTop: "30px", color: "gray" }}>Hand blended by-</h3>
              <h1 style={{ fontSize: "80px", fontWeight: "800", color: "orangered" }}>NIKHIL SINGH</h1>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default CocktailDetails
