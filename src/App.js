import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Cocktail from "./Pages/Cocktail";
import CocktailDetail from "./Pages/CocktailDetail";
import Product from "./Pages/Product";



function App() {


    return (
        <>
        <Navbar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cocktail" element={<Cocktail />} />
                <Route path="/cocktail:id" element={<CocktailDetail />} />
                <Route path="/product" element={<Product />} />

            </Routes>
        </>
    )
}
export default App;