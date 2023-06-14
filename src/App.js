import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Products from "./Pages/Products";
import ProductDetails from "./Pages/ProductDetails";


function App() {


    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<ProductDetails />} />
            </Routes>



        </>
    )
}
export default App;