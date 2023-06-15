import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Cocktail from "./Pages/Cocktail";
import Product from "./Pages/Product";
import CocktailDetails from "./Pages/CocktailDetails";
import PrivateRoute from "./Components/PrivateRoute";
import Login from "./Pages/Login";
import Help from "./Pages/Help";



function App() {


    return (
        <>
        <Navbar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cocktail" element={<Cocktail />} />
                <Route path="/cocktail/:id" element={<PrivateRoute> <CocktailDetails /> </PrivateRoute>} />
                <Route path="/product" element={<Product />} />
                <Route path="/login" element={<Login />} />
                <Route path="/help" element={<Help />} />

            </Routes>
        </>
    )
}
export default App;