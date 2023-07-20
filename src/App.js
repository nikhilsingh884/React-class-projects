import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Cocktail from "./Pages/Cocktail";
import Product from "./Pages/Product";
import CocktailDetails from "./Pages/CocktailDetails";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import About from "./Pages/About";
import Mobiles from "./Pages/Mobiles";
import MobilesDetails from "./Pages/MobilesDetails";
import Inventory from "./Pages/Inventory";
import BottomBar from "./Components/BottomBar";
import { createContext, useState } from "react";
import Cart from "./Pages/Cart";
import Footer from "./Components/Footer";
import ProductDetails from "./Pages/ProductDetails";
import ContactUs from "./Pages/ContactUs";

export const AppDetails = createContext();

function App() {

    const [cart, setCart] = useState([])
    const [drinksCart, setDrinksCart] = useState([])
    const [mobilesCart, setMobilesCart] = useState([])
    const [productCart, setProductCart] = useState([])


    return (
        <>
            <AppDetails.Provider value={{ cart, mobilesCart, setMobilesCart, setCart, productCart, setProductCart, setDrinksCart, drinksCart }}>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cocktail" element={<Cocktail />} />
                    <Route path="/cocktail/:id" element={ <CocktailDetails /> } />
                    <Route path="/product" element={<Product />} />
                    <Route path="/product/:id" element={ <ProductDetails /> } />

                    <Route path="/mobiles" element={<Mobiles />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/mobiles/:id" element={<MobilesDetails />} />
                    <Route path="/inventory" element={<Inventory />} />

                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/contactUs" element={<ContactUs />} />
                    <Route path="/about" element={<About />} />

                </Routes>
                <Footer/>
                <BottomBar />
            </AppDetails.Provider>
        </>
    )
}
export default App;