import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Products from "./Pages/Products";
import ProductDetails from "./Pages/ProductDetails";
import Home from "./Pages/Home";


function App() {


    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<ProductDetails />} />
            </Routes>



        </>
    )
}
export default App;