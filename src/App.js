import { Route, Router, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Products from "./Pages/Products";


function App() {


    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Products />}/>
            </Routes>



        </>
    )
}
export default App;