// import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Courses from "./Pages/Courses";
import Support from "./Pages/Support";
import About from "./Pages/About";
import Navbar from "./Components/Navbar";
import CourseDetails from "./Pages/CourseDetails";
import Fakestore from "./Pages/Fakestore";
import Cocktail from "./Pages/Cocktail";
import Phones from "./Pages/Phones";
import CocktailDetails from "./Pages/CocktailDetails";
import PrivateRoute from "./Components/PrivateRoute";
import { CoursesList } from "./CoursesList";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";

// export const UserDetails = createContext();
export const AppDetails = createContext();

function getLocalStorage() {
    const isLogin = localStorage.getItem('login')
    if (isLogin) {
        return true
    } else {
        return false
    }
}


function App() {


    const [login, setLogin] = useState(getLocalStorage());
    const [cart, setCart] = useState([]);
    const [courseListData, setCourseListData] = useState(CoursesList);
    const [isLoading, setIsLoading] = useState(true);



    return (
        <>
            <AppDetails.Provider value={{login,cart, setLogin, setCart, courseListData, setCourseListData, isLoading, setIsLoading}}>


                <Navbar />
                <Routes>

                    <Route path="/" element={<Home />}></Route>
                    <Route path="/courses" element={<PrivateRoute> <Courses /> </PrivateRoute>}></Route>
                    <Route path="/fakestore" element={<PrivateRoute><Fakestore /></PrivateRoute>}></Route>
                    <Route path="/support" element={<Support />}></Route>
                    <Route path="/Cocktail" element={<PrivateRoute> <Cocktail /></PrivateRoute>}></Route>
                    <Route path="/electronics" element={<PrivateRoute><Phones /></PrivateRoute>}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/Cocktail/:id" element={<PrivateRoute><CocktailDetails /></PrivateRoute>}></Route>
                    <Route path="/course/:id" element={<PrivateRoute><CourseDetails /></PrivateRoute >
                    }></Route>
                    <Route path="/Cart" element={<PrivateRoute><Cart /></PrivateRoute >}></Route>
                    <Route path="/Login" element={<Login />}></Route>

                </Routes>
            </AppDetails.Provider >
        </>
    )
}
export default App;