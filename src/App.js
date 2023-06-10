import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Cocktail from "./Pages/Cocktail";
import Product from "./Pages/Product";
import CocktailDetails from "./Pages/CocktailDetails";



function App() {


    return (
        <>
        <Navbar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cocktail" element={<Cocktail />} />
                <Route path="/cocktail/:id" element={<CocktailDetails />} />
                <Route path="/product" element={<Product />} />

            </Routes>
        </>
    )
}
export default App;