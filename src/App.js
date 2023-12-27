import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import CocktailDetails from "./Pages/CocktailDetails";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import About from "./Pages/About";
import MobilesDetails from "./Pages/MobilesDetails";
import Inventory from "./Pages/Inventory";
import BottomBar from "./Components/BottomBar";
import React, { createContext, useState } from "react";
import Cart from "./Pages/Cart";
import Footer from "./Components/Footer";
import ProductDetails from "./Pages/ProductDetails";
import ContactUs from "./Pages/ContactUs";
import CocktailPage from "./Pages/Cocktail";
import MobilesPage from "./Pages/Mobiles";
import ProductPage from "./Pages/Product";

// ==================Lazy-loading-components==================================

// const CocktailPage = React.lazy(() => import('../src/Pages/Cocktail'));
// const MobilesPage = React.lazy(() => import('../src/Pages/Mobiles'))
// const ProductPage = React.lazy(() => import('../src/Pages/Product'))

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
                    <Route path="/cocktail" element={<CocktailPage />} />
                    <Route path="/cocktail/:id" element={<CocktailDetails />} />
                    <Route path="/mobiles" element={<MobilesPage />} />
                    <Route path="/product/:id" element={<ProductDetails />} />

                    <Route path="/product" element={<ProductPage />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/mobiles/:id" element={<MobilesDetails />} />
                    <Route path="/inventory" element={<Inventory />} />

                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/contactUs" element={<ContactUs />} />
                    <Route path="/about" element={<About />} />

                </Routes>
                <Footer />
                <BottomBar />
            </AppDetails.Provider>
        </>
    )
}
export default App;