import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Cocktail from "./Pages/Cocktail";
import Product from "./Pages/Product";
import CocktailDetails from "./Pages/CocktailDetails";
import PrivateRoute from "./Components/PrivateRoute";
import Login from "./Pages/Login";
import Help from "./Pages/Help";
import Signup from "./Pages/Signup";
import About from "./Pages/About";
import Mobiles from "./Pages/Mobiles";
import MobilesDetails from "./Pages/MobilesDetails";
import Inventory from "./Pages/Inventory";
import BottomBar from "./Components/BottomBar";
import { createContext, useState } from "react";
import Cart from "./Pages/Cart";
import Footer from "./Components/Footer";

export const AppDetails = createContext();

function App() {

    const [cart, setCart] = useState([])


    return (
        <>
            <AppDetails.Provider value={{ cart, setCart }}>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cocktail" element={<Cocktail />} />
                    <Route path="/cocktail/:id" element={<PrivateRoute> <CocktailDetails /> </PrivateRoute>} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/mobiles" element={<Mobiles />} />
                    <Route path="/cart" element={<PrivateRoute><Cart /></PrivateRoute>} />
                    <Route path="/mobiles/:id" element={<PrivateRoute><MobilesDetails /></PrivateRoute>} />
                    <Route path="/inventory" element={<PrivateRoute><Inventory /></PrivateRoute>} />

                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/help" element={<Help />} />
                    <Route path="/about" element={<About />} />

                </Routes>
                <Footer/>
                <BottomBar />
            </AppDetails.Provider>
        </>
    )
}
export default App;